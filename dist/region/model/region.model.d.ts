import { Model } from "sequelize-typescript";
interface RegionAttr {
    viloyat: string;
    tuman: string;
    mahala: string;
}
export declare class Region extends Model<Region, RegionAttr> {
    id: number;
    viloyat: string;
    tuman: string;
    mahala: string;
}
export {};
