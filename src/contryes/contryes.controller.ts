import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContryesService } from './contryes.service';
import { CreateContryeDto } from './dto/create-contrye.dto';
import { UpdateContryeDto } from './dto/update-contrye.dto';

@Controller('contryes')
export class ContryesController {
  constructor(private readonly contryesService: ContryesService) {}

  @Post()
  create(@Body() createContryeDto: CreateContryeDto) {
    return this.contryesService.create(createContryeDto);
  }

  @Get()
  findAll() {
    return this.contryesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contryesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContryeDto: UpdateContryeDto) {
    return this.contryesService.update(+id, updateContryeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contryesService.remove(+id);
  }
}
