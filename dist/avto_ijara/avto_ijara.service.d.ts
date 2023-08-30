import { CreateAvtoIjaraDto } from './dto/create-avto_ijara.dto';
import { UpdateAvtoIjaraDto } from './dto/update-avto_ijara.dto';
import { AvtoIjara } from './model/avto_ijara.model';
export declare class AvtoIjaraService {
    private readonly AvtoIjaraModel;
    constructor(AvtoIjaraModel: typeof AvtoIjara);
    findAll(): Promise<AvtoIjara[]>;
    findOne(id: number): Promise<AvtoIjara>;
    create(createAvtoIjaraDto: CreateAvtoIjaraDto): Promise<AvtoIjara>;
    update(id: number, updateAvtoIjaraDto: UpdateAvtoIjaraDto): Promise<AvtoIjara>;
    delete(id: number): Promise<void>;
}
