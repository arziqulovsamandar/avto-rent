import { Model } from "sequelize-typescript";
import { AvtoIjara } from "../../avto_ijara/model/avto_ijara.model";
interface CompaniyaAttr {
    name: string;
    address: string;
    phone_number: string;
}
export declare class Companiya extends Model<Companiya, CompaniyaAttr> {
    id: number;
    name: string;
    address: string;
    phone_number: string;
    avtoIjara: AvtoIjara[];
}
export {};
