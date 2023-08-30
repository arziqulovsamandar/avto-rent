"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompaniyaModule = void 0;
const common_1 = require("@nestjs/common");
const companiya_service_1 = require("./companiya.service");
const companiya_controller_1 = require("./companiya.controller");
const sequelize_1 = require("@nestjs/sequelize");
const companiya_model_1 = require("./model/companiya.model");
let CompaniyaModule = exports.CompaniyaModule = class CompaniyaModule {
};
exports.CompaniyaModule = CompaniyaModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([companiya_model_1.Companiya])],
        controllers: [companiya_controller_1.CompaniyaController],
        providers: [companiya_service_1.CompaniyaService],
        exports: [companiya_service_1.CompaniyaService]
    })
], CompaniyaModule);
//# sourceMappingURL=companiya.module.js.map