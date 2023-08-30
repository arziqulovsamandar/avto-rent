import { Model } from "sequelize-typescript";
import { Avto } from "../../avto/model/avto.model";
interface TypeAttr {
    name: string;
}
export declare class Type extends Model<Type, TypeAttr> {
    id: number;
    name: string;
    avto: Avto[];
}
export {};
