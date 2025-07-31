import {
  Injectable,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entitie/task.entity';
import { Project } from '../project/entitie/project.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { User } from '../user/entitie/user.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepo: Repository<Task>,
    @InjectRepository(Project)
    private readonly projectRepo: Repository<Project>,
  ) {}

  async create(createTaskDto: CreateTaskDto, user: User) {
    const project = await this.projectRepo.findOne({
      where: { id: createTaskDto.projetoId, user: { id: user.id } },
    });

    if (!project) {
      throw new ForbiddenException('Projeto não encontrado ou não pertence ao usuário');
    }

    const task = this.taskRepo.create({
      ...createTaskDto,
      projeto: project,
    });

    return this.taskRepo.save(task);
  }

  async findAllByUser(user: User) {
    return this.taskRepo.find({
      where: { projeto: { user: { id: user.id } } },
      relations: ['projeto'],
    });
  }


  async findAllByProject(projectId: string, user: User) {
    const project = await this.projectRepo.findOne({
      where: { id: projectId, user: { id: user.id } },
    });

    if (!project) {
      throw new ForbiddenException('Projeto não encontrado ou não pertence ao usuário');
    }

    return this.taskRepo.find({
      where: { projeto: { id: projectId } },
    });
  }

  async findOne(id: string, user: User) {
    const task = await this.taskRepo.findOne({
      where: { id },
      relations: ['projeto', 'projeto.user'],
    });

    if (!task || !task.projeto?.user || task.projeto.user.id !== user.id) {
      throw new NotFoundException('Tarefa não encontrada ou acesso negado');
    }

    return task;
  }

  async update(id: string, updateDto: UpdateTaskDto, user: User) {
    const task = await this.findOne(id, user);
    Object.assign(task, updateDto);
    return this.taskRepo.save(task);
  }

  async remove(id: string, user: User) {
    const task = await this.findOne(id, user);
    return this.taskRepo.remove(task);
  }
}
