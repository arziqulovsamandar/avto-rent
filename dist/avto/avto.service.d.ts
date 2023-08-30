import { CreateAvtoDto } from './dto/create-avto.dto';
import { UpdateAvtoDto } from './dto/update-avto.dto';
import { Avto } from './model/avto.model';
export declare class AvtoService {
    private readonly AvtoModel;
    constructor(AvtoModel: typeof Avto);
    findAll(): Promise<Avto[]>;
    findOne(id: number): Promise<Avto>;
    create(createAvtoDto: CreateAvtoDto): Promise<Avto>;
    update(id: number, updateAvtoDto: UpdateAvtoDto): Promise<Avto>;
    delete(id: number): Promise<void>;
}
