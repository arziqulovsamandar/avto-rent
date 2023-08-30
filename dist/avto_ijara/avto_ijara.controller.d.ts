import { AvtoIjaraService } from './avto_ijara.service';
import { CreateAvtoIjaraDto } from './dto/create-avto_ijara.dto';
import { UpdateAvtoIjaraDto } from './dto/update-avto_ijara.dto';
export declare class AvtoIjaraController {
    private readonly avtoIjaraService;
    constructor(avtoIjaraService: AvtoIjaraService);
    create(createAvtoIjaraDto: CreateAvtoIjaraDto): Promise<import("./model/avto_ijara.model").AvtoIjara>;
    findAll(): Promise<import("./model/avto_ijara.model").AvtoIjara[]>;
    findOne(id: string): Promise<import("./model/avto_ijara.model").AvtoIjara>;
    update(id: string, updateAvtoIjaraDto: UpdateAvtoIjaraDto): Promise<import("./model/avto_ijara.model").AvtoIjara>;
    remove(id: string): Promise<void>;
}
