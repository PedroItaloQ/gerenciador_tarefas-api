import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany } from 'typeorm';
import { User } from '../../user/entitie/user.entity';
import { Task } from 'src/task/entitie/task.entity';

@Entity()
export class Project {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column({ nullable: true })
  descricao?: string;

  @ManyToOne(() => User, user => user.projects)
  user: User;

  @CreateDateColumn()
  dataCriacao: Date;

  @UpdateDateColumn()
  dataAtualizacao: Date;

  @OneToMany(() => Task, task => task.projeto)
  tasks: Task[];

}