import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { Status } from './model/status.model';
export declare class StatusService {
    private readonly StatusModel;
    constructor(StatusModel: typeof Status);
    findAll(): Promise<Status[]>;
    findOne(id: number): Promise<Status>;
    create(createStatusDto: CreateStatusDto): Promise<Status>;
    update(id: number, updateStatusDto: UpdateStatusDto): Promise<Status>;
    delete(id: number): Promise<void>;
}
