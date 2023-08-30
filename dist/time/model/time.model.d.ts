import { Model } from "sequelize-typescript";
import { AvtoIjara } from "../../avto_ijara/model/avto_ijara.model";
interface TimeAttr {
    kunlik: string;
    soatlik: string;
    vaqt_qoshish: string;
}
export declare class Time extends Model<Time, TimeAttr> {
    id: number;
    kunlik: string;
    soatlik: string;
    vaqt_qoshish: string;
    avtoIjara: AvtoIjara[];
}
export {};
