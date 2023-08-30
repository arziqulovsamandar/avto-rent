import { AvtoEgasiService } from './avto_egasi.service';
import { CreateAvtoEgasiDto } from './dto/create-avto_egasi.dto';
import { UpdateAvtoEgasiDto } from './dto/update-avto_egasi.dto';
export declare class AvtoEgasiController {
    private readonly avtoEgasiService;
    constructor(avtoEgasiService: AvtoEgasiService);
    create(createAvtoEgasiDto: CreateAvtoEgasiDto): Promise<import("./model/avto_egasi.model").AvtoEgasi>;
    findAll(): Promise<import("./model/avto_egasi.model").AvtoEgasi[]>;
    findOne(id: string): Promise<import("./model/avto_egasi.model").AvtoEgasi>;
    update(id: string, updateAvtoEgasiDto: UpdateAvtoEgasiDto): Promise<import("./model/avto_egasi.model").AvtoEgasi>;
    remove(id: string): Promise<void>;
}
