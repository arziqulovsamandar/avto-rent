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
exports.CompaniyaService = void 0;
const common_1 = require("@nestjs/common");
const error_Handling_1 = require("../middleware/error_Handling");
const sequelize_1 = require("@nestjs/sequelize");
const companiya_model_1 = require("./model/companiya.model");
let CompaniyaService = exports.CompaniyaService = class CompaniyaService {
    constructor(CompaniyaModel) {
        this.CompaniyaModel = CompaniyaModel;
    }
    async findAll() {
        try {
            return this.CompaniyaModel.findAll({ include: { all: true } });
        }
        catch (error) {
            console.log(error);
            throw new error_Handling_1.ForbiddenException();
        }
    }
    async findOne(id) {
        try {
            return this.CompaniyaModel.findByPk(id);
        }
        catch (error) {
            console.log(error);
            throw new error_Handling_1.ForbiddenException();
        }
    }
    async create(createCompaniyaDto) {
        try {
            return this.CompaniyaModel.create(createCompaniyaDto);
        }
        catch (error) {
            console.log(error);
            throw new error_Handling_1.ForbiddenException();
        }
    }
    async update(id, updateCompaniyaDto) {
        try {
            const builder = await this.CompaniyaModel.update(updateCompaniyaDto, {
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
            const numRowsDeleted = await this.CompaniyaModel.destroy({
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
exports.CompaniyaService = CompaniyaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(companiya_model_1.Companiya)),
    __metadata("design:paramtypes", [Object])
], CompaniyaService);
//# sourceMappingURL=companiya.service.js.map