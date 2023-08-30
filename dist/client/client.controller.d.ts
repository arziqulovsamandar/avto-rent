import { ClientService } from "./client.service";
import { CreateClientDto } from "./dto/create-client.dto";
import { UpdateClientDto } from "./dto/update-client.dto";
import { Client } from "./model/client.model";
export declare class ClientController {
    private readonly clientService;
    constructor(clientService: ClientService);
    findAll(): Promise<Client[]>;
    findOne(id: number): Promise<Client>;
    create(createClientDto: CreateClientDto): Promise<Client>;
    update(id: number, updateClientDto: UpdateClientDto): Promise<Client>;
    delete(id: number): Promise<void>;
}
