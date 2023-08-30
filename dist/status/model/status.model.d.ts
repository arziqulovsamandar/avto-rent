import { Model } from "sequelize-typescript";
import { Avto } from "../../avto/model/avto.model";
interface StatusAttr {
    status: string;
}
export declare class Status extends Model<Status, StatusAttr> {
    id: number;
    status: string;
    avto: Avto[];
}
export {};
