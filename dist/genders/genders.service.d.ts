import { CreateGenderDto } from './dto/create-gender.dto';
import { UpdateGenderDto } from './dto/update-gender.dto';
export declare class GendersService {
    create(createGenderDto: CreateGenderDto): string;
    findAll(): {
        id: number;
        name: string;
    }[];
    findOne(id: number): string;
    update(id: number, updateGenderDto: UpdateGenderDto): string;
    remove(id: number): string;
}
