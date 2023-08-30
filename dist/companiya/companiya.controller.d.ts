import { CompaniyaService } from './companiya.service';
import { CreateCompaniyaDto } from './dto/create-companiya.dto';
import { UpdateCompaniyaDto } from './dto/update-companiya.dto';
export declare class CompaniyaController {
    private readonly companiyaService;
    constructor(companiyaService: CompaniyaService);
    create(createCompaniyaDto: CreateCompaniyaDto): Promise<import("./model/companiya.model").Companiya>;
    findAll(): Promise<import("./model/companiya.model").Companiya[]>;
    findOne(id: string): Promise<import("./model/companiya.model").Companiya>;
    update(id: string, updateCompaniyaDto: UpdateCompaniyaDto): Promise<import("./model/companiya.model").Companiya>;
    remove(id: string): Promise<void>;
}
