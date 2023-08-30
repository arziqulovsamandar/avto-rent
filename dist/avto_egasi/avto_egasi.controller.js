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
exports.AvtoEgasiController = void 0;
const common_1 = require("@nestjs/common");
const avto_egasi_service_1 = require("./avto_egasi.service");
const create_avto_egasi_dto_1 = require("./dto/create-avto_egasi.dto");
const update_avto_egasi_dto_1 = require("./dto/update-avto_egasi.dto");
const swagger_1 = require("@nestjs/swagger");
let AvtoEgasiController = exports.AvtoEgasiController = class AvtoEgasiController {
    constructor(avtoEgasiService) {
        this.avtoEgasiService = avtoEgasiService;
    }
    create(createAvtoEgasiDto) {
        return this.avtoEgasiService.create(createAvtoEgasiDto);
    }
    findAll() {
        return this.avtoEgasiService.findAll();
    }
    findOne(id) {
        return this.avtoEgasiService.findOne(+id);
    }
    update(id, updateAvtoEgasiDto) {
        return this.avtoEgasiService.update(+id, updateAvtoEgasiDto);
    }
    remove(id) {
        return this.avtoEgasiService.delete(+id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Create Avto-egasi" }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_avto_egasi_dto_1.CreateAvtoEgasiDto]),
    __metadata("design:returntype", void 0)
], AvtoEgasiController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "All Avto-egasi" }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AvtoEgasiController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Findone Avto-egasi" }),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AvtoEgasiController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Update Avto-egasi" }),
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_avto_egasi_dto_1.UpdateAvtoEgasiDto]),
    __metadata("design:returntype", void 0)
], AvtoEgasiController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Delete Avto-egasi" }),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AvtoEgasiController.prototype, "remove", null);
exports.AvtoEgasiController = AvtoEgasiController = __decorate([
    (0, swagger_1.ApiTags)("Avto-egasi"),
    (0, common_1.Controller)("avto-egasi"),
    __metadata("design:paramtypes", [avto_egasi_service_1.AvtoEgasiService])
], AvtoEgasiController);
//# sourceMappingURL=avto_egasi.controller.js.map