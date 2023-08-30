import { Model } from "sequelize-typescript";
import { Avto } from "../../avto/model/avto.model";
interface ImagesAttr {
    image: string;
    avto_id: number;
}
export declare class Images extends Model<Images, ImagesAttr> {
    id: number;
    image: string;
    avto_id: number;
    avto: Avto;
}
export {};
