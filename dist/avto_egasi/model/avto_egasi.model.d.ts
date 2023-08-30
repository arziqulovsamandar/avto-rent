import { Model } from "sequelize-typescript";
import { Avto } from "../../avto/model/avto.model";
interface AvtoEgasiAttr {
    name: string;
    email: string;
    phone_number: string;
    avto_id: number;
}
export declare class AvtoEgasi extends Model<AvtoEgasi, AvtoEgasiAttr> {
    id: number;
    name: string;
    email: string;
    phone_number: string;
    avto_id: number;
    avto: Avto;
}
export {};
