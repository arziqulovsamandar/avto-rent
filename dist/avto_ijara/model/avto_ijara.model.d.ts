import { Model } from "sequelize-typescript";
import { Companiya } from "../../companiya/model/companiya.model";
import { Client } from "../../client/model/client.model";
import { Avto } from "../../avto/model/avto.model";
import { Time } from "../../time/model/time.model";
interface AvtoIjaraAttr {
    companiya_id: number;
    client_id: number;
    avto_id: number;
    time_id: number;
    start_time: Date;
    end_time: Date;
    price: number;
}
export declare class AvtoIjara extends Model<AvtoIjara, AvtoIjaraAttr> {
    id: number;
    companiya_id: number;
    companiya: Companiya;
    client_id: number;
    client: Client;
    avto_id: number;
    avto: Avto;
    time_id: number;
    time: Time;
    start_time: Date;
    end_time: Date;
    price: number;
}
export {};
