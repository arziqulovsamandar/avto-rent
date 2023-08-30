import { CreateTimeDto } from './dto/create-time.dto';
import { UpdateTimeDto } from './dto/update-time.dto';
import { Time } from './model/time.model';
export declare class TimeService {
    private readonly TimeModel;
    constructor(TimeModel: typeof Time);
    findAll(): Promise<Time[]>;
    findOne(id: number): Promise<Time>;
    create(createTimeDto: CreateTimeDto): Promise<Time>;
    update(id: number, updateTimeDto: UpdateTimeDto): Promise<Time>;
    delete(id: number): Promise<void>;
}
