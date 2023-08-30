import { TimeService } from './time.service';
import { CreateTimeDto } from './dto/create-time.dto';
import { UpdateTimeDto } from './dto/update-time.dto';
export declare class TimeController {
    private readonly timeService;
    constructor(timeService: TimeService);
    create(createTimeDto: CreateTimeDto): Promise<import("./model/time.model").Time>;
    findAll(): Promise<import("./model/time.model").Time[]>;
    findOne(id: string): Promise<import("./model/time.model").Time>;
    update(id: string, updateTimeDto: UpdateTimeDto): Promise<import("./model/time.model").Time>;
    remove(id: string): Promise<void>;
}
