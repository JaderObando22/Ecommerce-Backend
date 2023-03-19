import { ContryesService } from './contryes.service';
import { CreateContryeDto } from './dto/create-contrye.dto';
import { UpdateContryeDto } from './dto/update-contrye.dto';
export declare class ContryesController {
    private readonly contryesService;
    constructor(contryesService: ContryesService);
    create(createContryeDto: CreateContryeDto): string;
    findAll(): {
        id: number;
        name: string;
    }[];
    findOne(id: string): string;
    update(id: string, updateContryeDto: UpdateContryeDto): string;
    remove(id: string): string;
}
