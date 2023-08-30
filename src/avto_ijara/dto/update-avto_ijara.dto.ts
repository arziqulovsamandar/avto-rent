import { PartialType } from '@nestjs/swagger';
import { CreateAvtoIjaraDto } from './create-avto_ijara.dto';

export class UpdateAvtoIjaraDto extends PartialType(CreateAvtoIjaraDto) {}
