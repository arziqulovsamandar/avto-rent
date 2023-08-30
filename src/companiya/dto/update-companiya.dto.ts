import { PartialType } from '@nestjs/swagger';
import { CreateCompaniyaDto } from './create-companiya.dto';

export class UpdateCompaniyaDto extends PartialType(CreateCompaniyaDto) {}
