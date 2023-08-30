"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvtoIjaraModule = void 0;
const common_1 = require("@nestjs/common");
const avto_ijara_service_1 = require("./avto_ijara.service");
const avto_ijara_controller_1 = require("./avto_ijara.controller");
const sequelize_1 = require("@nestjs/sequelize");
const avto_ijara_model_1 = require("./model/avto_ijara.model");
const companiya_model_1 = require("../companiya/model/companiya.model");
const time_model_1 = require("../time/model/time.model");
const client_model_1 = require("../client/model/client.model");
const avto_model_1 = require("../avto/model/avto.model");
let AvtoIjaraModule = exports.AvtoIjaraModule = class AvtoIjaraModule {
};
exports.AvtoIjaraModule = AvtoIjaraModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([avto_ijara_model_1.AvtoIjara, companiya_model_1.Companiya, time_model_1.Time, client_model_1.Client, avto_model_1.Avto])],
        controllers: [avto_ijara_controller_1.AvtoIjaraController],
        providers: [avto_ijara_service_1.AvtoIjaraService],
        exports: [avto_ijara_service_1.AvtoIjaraService]
    })
], AvtoIjaraModule);
//# sourceMappingURL=avto_ijara.module.js.map