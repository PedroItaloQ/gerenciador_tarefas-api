import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from './entitie/project.entity';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { User } from '../user/entitie/user.entity';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepo: Repository<Project>,
  ) {}

  async create(createProjectDto: CreateProjectDto, user: User) {
    const project = this.projectRepo.create({
      ...createProjectDto,
      user,
    });
    return this.projectRepo.save(project);
  }

  async findAll(user: User) {
    return this.projectRepo.find({
      where: { user: { id: user.id } },
      relations: ['tasks'],
    });
  }

  async findOne(id: string, user: User) {
    const project = await this.projectRepo.findOne({
      where: { id, user: { id: user.id } },
      relations: ['tasks'],
    });

    if (!project) {
      throw new NotFoundException('Projeto não encontrado');
    }

    return project;
  }

  async update(id: string, updateDto: UpdateProjectDto, user: User) {
    const project = await this.findOne(id, user);
    Object.assign(project, updateDto);
    return this.projectRepo.save(project);
  }

  async remove(id: string, user: User) {
    const project = await this.findOne(id, user);
    return this.projectRepo.remove(project);
  }
}