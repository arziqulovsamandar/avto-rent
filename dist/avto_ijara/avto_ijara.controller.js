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
exports.AvtoIjaraController = void 0;
const common_1 = require("@nestjs/common");
const avto_ijara_service_1 = require("./avto_ijara.service");
const create_avto_ijara_dto_1 = require("./dto/create-avto_ijara.dto");
const update_avto_ijara_dto_1 = require("./dto/update-avto_ijara.dto");
const swagger_1 = require("@nestjs/swagger");
let AvtoIjaraController = exports.AvtoIjaraController = class AvtoIjaraController {
    constructor(avtoIjaraService) {
        this.avtoIjaraService = avtoIjaraService;
    }
    create(createAvtoIjaraDto) {
        return this.avtoIjaraService.create(createAvtoIjaraDto);
    }
    findAll() {
        return this.avtoIjaraService.findAll();
    }
    findOne(id) {
        return this.avtoIjaraService.findOne(+id);
    }
    update(id, updateAvtoIjaraDto) {
        return this.avtoIjaraService.update(+id, updateAvtoIjaraDto);
    }
    remove(id) {
        return this.avtoIjaraService.delete(+id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "create Avto-ijara" }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_avto_ijara_dto_1.CreateAvtoIjaraDto]),
    __metadata("design:returntype", void 0)
], AvtoIjaraController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "all Avto-ijara" }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AvtoIjaraController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "findONe Avto-ijara" }),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AvtoIjaraController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Update Avto-ijara" }),
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_avto_ijara_dto_1.UpdateAvtoIjaraDto]),
    __metadata("design:returntype", void 0)
], AvtoIjaraController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Delete Avto-ijara" }),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AvtoIjaraController.prototype, "remove", null);
exports.AvtoIjaraController = AvtoIjaraController = __decorate([
    (0, swagger_1.ApiTags)("Avto_ijara"),
    (0, common_1.Controller)("avto-ijara"),
    __metadata("design:paramtypes", [avto_ijara_service_1.AvtoIjaraService])
], AvtoIjaraController);
//# sourceMappingURL=avto_ijara.controller.js.map