import { ImagesService } from './images.service';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
export declare class ImagesController {
    private readonly imagesService;
    constructor(imagesService: ImagesService);
    create(createImageDto: CreateImageDto): Promise<import("./model/image.model").Images>;
    findAll(): Promise<import("./model/image.model").Images[]>;
    findOne(id: string): Promise<import("./model/image.model").Images>;
    update(id: string, updateImageDto: UpdateImageDto): Promise<import("./model/image.model").Images>;
    remove(id: string): Promise<void>;
}
