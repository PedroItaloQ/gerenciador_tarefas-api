import {
  IsDateString,
  IsEnum,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { StatusTarefa } from '../enums/task-status.enum';

export class CreateTaskDto {
  @IsString()
  titulo: string;

  @IsOptional()
  @IsString()
  descricao?: string;

  @IsEnum(StatusTarefa)
  status: StatusTarefa;

  @IsOptional()
  @IsDateString()
  dataVencimento?: string;

  @IsUUID()
  projetoId: string;
}
