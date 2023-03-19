import { PartialType } from '@nestjs/mapped-types';
import { CreateContryeDto } from './create-contrye.dto';

export class UpdateContryeDto extends PartialType(CreateContryeDto) {}
