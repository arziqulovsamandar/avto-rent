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
exports.CompaniyaController = void 0;
const common_1 = require("@nestjs/common");
const companiya_service_1 = require("./companiya.service");
const create_companiya_dto_1 = require("./dto/create-companiya.dto");
const update_companiya_dto_1 = require("./dto/update-companiya.dto");
const swagger_1 = require("@nestjs/swagger");
let CompaniyaController = exports.CompaniyaController = class CompaniyaController {
    constructor(companiyaService) {
        this.companiyaService = companiyaService;
    }
    create(createCompaniyaDto) {
        return this.companiyaService.create(createCompaniyaDto);
    }
    findAll() {
        return this.companiyaService.findAll();
    }
    findOne(id) {
        return this.companiyaService.findOne(+id);
    }
    update(id, updateCompaniyaDto) {
        return this.companiyaService.update(+id, updateCompaniyaDto);
    }
    remove(id) {
        return this.companiyaService.delete(+id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Create companiya" }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_companiya_dto_1.CreateCompaniyaDto]),
    __metadata("design:returntype", void 0)
], CompaniyaController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "All Companiya" }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CompaniyaController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Id search Companiya" }),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CompaniyaController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Update companiya" }),
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_companiya_dto_1.UpdateCompaniyaDto]),
    __metadata("design:returntype", void 0)
], CompaniyaController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Delete companiya" }),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CompaniyaController.prototype, "remove", null);
exports.CompaniyaController = CompaniyaController = __decorate([
    (0, swagger_1.ApiTags)("Companiya"),
    (0, common_1.Controller)("companiya"),
    __metadata("design:paramtypes", [companiya_service_1.CompaniyaService])
], CompaniyaController);
//# sourceMappingURL=companiya.controller.js.map