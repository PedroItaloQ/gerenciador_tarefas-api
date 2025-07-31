import {
  IsDateString,
  IsEnum,
  IsOptional,
  IsString,
} from 'class-validator';
import { StatusTarefa } from '../enums/task-status.enum';

export class UpdateTaskDto {
  @IsOptional()
  @IsString()
  titulo?: string;

  @IsOptional()
  @IsString()
  descricao?: string;

  @IsOptional()
  @IsEnum(StatusTarefa)
  status?: StatusTarefa;

  @IsOptional()
  @IsDateString()
  dataVencimento?: string;
}
