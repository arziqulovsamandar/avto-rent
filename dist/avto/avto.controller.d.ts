import { AvtoService } from './avto.service';
import { CreateAvtoDto } from './dto/create-avto.dto';
import { UpdateAvtoDto } from './dto/update-avto.dto';
export declare class AvtoController {
    private readonly avtoService;
    constructor(avtoService: AvtoService);
    create(createAvtoDto: CreateAvtoDto): Promise<import("./model/avto.model").Avto>;
    findAll(): Promise<import("./model/avto.model").Avto[]>;
    findOne(id: string): Promise<import("./model/avto.model").Avto>;
    update(id: string, updateAvtoDto: UpdateAvtoDto): Promise<import("./model/avto.model").Avto>;
    remove(id: string): Promise<void>;
}
