import { CreateCompaniyaDto } from './dto/create-companiya.dto';
import { UpdateCompaniyaDto } from './dto/update-companiya.dto';
import { Companiya } from './model/companiya.model';
export declare class CompaniyaService {
    private readonly CompaniyaModel;
    constructor(CompaniyaModel: typeof Companiya);
    findAll(): Promise<Companiya[]>;
    findOne(id: number): Promise<Companiya>;
    create(createCompaniyaDto: CreateCompaniyaDto): Promise<Companiya>;
    update(id: number, updateCompaniyaDto: UpdateCompaniyaDto): Promise<Companiya>;
    delete(id: number): Promise<void>;
}
