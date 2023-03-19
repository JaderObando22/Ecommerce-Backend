import { CreateContryeDto } from './dto/create-contrye.dto';
import { UpdateContryeDto } from './dto/update-contrye.dto';
export declare class ContryesService {
    create(createContryeDto: CreateContryeDto): string;
    findAll(): {
        id: number;
        name: string;
    }[];
    findOne(id: number): string;
    update(id: number, updateContryeDto: UpdateContryeDto): string;
    remove(id: number): string;
}
