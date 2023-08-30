import { Model } from "sequelize-typescript";
import { AvtoIjara } from "../../avto_ijara/model/avto_ijara.model";
interface ClientAttr {
    first_name: string;
    last_name: string;
    phone_number: string;
    email: string;
    password: string;
}
export declare class Client extends Model<Client, ClientAttr> {
    id: number;
    first_name: string;
    last_name: string;
    phone_number: string;
    email: string;
    password: string;
    avtoIjara: AvtoIjara[];
}
export {};
