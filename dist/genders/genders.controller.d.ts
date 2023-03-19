import { GendersService } from './genders.service';
import { CreateGenderDto } from './dto/create-gender.dto';
import { UpdateGenderDto } from './dto/update-gender.dto';
export declare class GendersController {
    private readonly gendersService;
    constructor(gendersService: GendersService);
    create(createGenderDto: CreateGenderDto): string;
    findAll(): {
        id: number;
        name: string;
    }[];
    findOne(id: string): string;
    update(id: string, updateGenderDto: UpdateGenderDto): string;
    remove(id: string): string;
}
