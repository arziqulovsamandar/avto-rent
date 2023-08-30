import { CreateAvtoEgasiDto } from './dto/create-avto_egasi.dto';
import { UpdateAvtoEgasiDto } from './dto/update-avto_egasi.dto';
import { AvtoEgasi } from './model/avto_egasi.model';
export declare class AvtoEgasiService {
    private readonly AvtoEgasiModel;
    constructor(AvtoEgasiModel: typeof AvtoEgasi);
    findAll(): Promise<AvtoEgasi[]>;
    findOne(id: number): Promise<AvtoEgasi>;
    create(createAvtoEgasiDto: CreateAvtoEgasiDto): Promise<AvtoEgasi>;
    update(id: number, updateAvtoEgasiDto: UpdateAvtoEgasiDto): Promise<AvtoEgasi>;
    delete(id: number): Promise<void>;
}
