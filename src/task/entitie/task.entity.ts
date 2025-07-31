import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Project } from '../../project/entitie/project.entity';

export enum StatusTarefa {
  PENDENTE = 'PENDENTE',
  EM_ANDAMENTO = 'EM_ANDAMENTO',
  CONCLUIDA = 'CONCLUIDA',
}

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  titulo: string;

  @Column({ nullable: true })
  descricao?: string;

  @Column({
    type: 'enum',
    enum: StatusTarefa,
    default: StatusTarefa.PENDENTE,
  })
  status: StatusTarefa;

  @Column({ nullable: true })
  dataVencimento?: Date;

  @ManyToOne(() => Project, project => project.tasks, { onDelete: 'CASCADE' })
  projeto: Project;

  @CreateDateColumn()
  dataCriacao: Date;

  @UpdateDateColumn()
  dataAtualizacao: Date;
}
