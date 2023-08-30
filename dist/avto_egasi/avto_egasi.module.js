"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvtoEgasiModule = void 0;
const common_1 = require("@nestjs/common");
const avto_egasi_service_1 = require("./avto_egasi.service");
const avto_egasi_controller_1 = require("./avto_egasi.controller");
const sequelize_1 = require("@nestjs/sequelize");
const avto_egasi_model_1 = require("./model/avto_egasi.model");
const avto_model_1 = require("../avto/model/avto.model");
let AvtoEgasiModule = exports.AvtoEgasiModule = class AvtoEgasiModule {
};
exports.AvtoEgasiModule = AvtoEgasiModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([avto_egasi_model_1.AvtoEgasi, avto_model_1.Avto])],
        controllers: [avto_egasi_controller_1.AvtoEgasiController],
        providers: [avto_egasi_service_1.AvtoEgasiService],
        exports: [avto_egasi_service_1.AvtoEgasiService]
    })
], AvtoEgasiModule);
//# sourceMappingURL=avto_egasi.module.js.map