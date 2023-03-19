import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

const db =[
  {
  id:1,
  name:'Nuevos',
  
 },
 {
  id:2,
  name:'Semi Nuevo',
  
 },
 {
  id:3,
  name:'Originales',
 }
]
@Injectable()
export class CategoryService {
 
  create(createCategoryDto: CreateCategoryDto) {
    return 'This action adds a new category';
  }

  findAll() {
    return db;
  }
  

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
