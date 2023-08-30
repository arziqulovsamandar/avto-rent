import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { Images } from './model/image.model';
export declare class ImagesService {
    private readonly ImagesModel;
    constructor(ImagesModel: typeof Images);
    findAll(): Promise<Images[]>;
    findOne(id: number): Promise<Images>;
    create(createImagesDto: CreateImageDto): Promise<Images>;
    update(id: number, updateImagesDto: UpdateImageDto): Promise<Images>;
    delete(id: number): Promise<void>;
}
