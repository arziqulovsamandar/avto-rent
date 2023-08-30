import { Model } from "sequelize-typescript";
import { AvtoIjara } from "../../avto_ijara/model/avto_ijara.model";
import { Status } from "../../status/model/status.model";
import { Type } from "../../type/model/type.model";
import { AvtoEgasi } from "../../avto_egasi/model/avto_egasi.model";
import { Images } from "../../images/model/image.model";
interface AvtoAttr {
    name: string;
    yili: Date;
    type_id: number;
    nomeri: string;
    yoqilgi_turi: string;
    status_id: number;
    lokatsiya: string;
    ot_kuchi: string;
    yoqilgi_sarfi: string;
    mator_sigimi: string;
    kondensioneri: string;
}
export declare class Avto extends Model<Avto, AvtoAttr> {
    id: number;
    name: string;
    yili: Date;
    numeri: string;
    yoqilgi_turi: string;
    lokatsiya: string;
    ot_kuchi: string;
    yoqilgi_sarfi: string;
    mator_sigimi: string;
    kondensioneri: string;
    status_id: number;
    status: Status;
    type_id: number;
    type: Type;
    avtoIjara: AvtoIjara[];
    avtoEgasi: AvtoEgasi[];
    images: Images[];
}
export {};
