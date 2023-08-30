import { PartialType } from '@nestjs/swagger';
import { CreateAvtoEgasiDto } from './create-avto_egasi.dto';

export class UpdateAvtoEgasiDto extends PartialType(CreateAvtoEgasiDto) {}
