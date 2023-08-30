"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const client_model_1 = require("./model/client.model");
const error_Handling_1 = require("../middleware/error_Handling");
let ClientService = exports.ClientService = class ClientService {
    constructor(clientModel) {
        this.clientModel = clientModel;
    }
    async findAll() {
        try {
            return this.clientModel.findAll({ include: { all: true } });
        }
        catch (error) {
            console.log(error);
            throw new error_Handling_1.ForbiddenException();
        }
    }
    async findOne(id) {
        try {
            return this.clientModel.findByPk(id);
        }
        catch (error) {
            console.log(error);
            throw new error_Handling_1.ForbiddenException();
        }
    }
    async create(createClientDto) {
        try {
            return this.clientModel.create(createClientDto);
        }
        catch (error) {
            console.log(error);
            throw new error_Handling_1.ForbiddenException();
        }
    }
    async update(id, updateClientDto) {
        try {
            const builder = await this.clientModel.update(updateClientDto, {
                where: { id },
                returning: true,
            });
            return builder[1][0].dataValues;
        }
        catch (error) {
            console.log(error);
            throw new error_Handling_1.ForbiddenException();
        }
    }
    async delete(id) {
        try {
            const numRowsDeleted = await this.clientModel.destroy({
                where: { id },
            });
            if (numRowsDeleted === 0) {
                throw new Error(`Could not delete venue type with id ${id}`);
            }
        }
        catch (error) {
            console.log(error);
            throw new error_Handling_1.ForbiddenException();
        }
    }
};
exports.ClientService = ClientService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(client_model_1.Client)),
    __metadata("design:paramtypes", [Object])
], ClientService);
//# sourceMappingURL=client.service.js.map