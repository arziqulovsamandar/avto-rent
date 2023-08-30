"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const sequelize_1 = require("@nestjs/sequelize");
const admin_module_1 = require("./admin/admin.module");
const client_module_1 = require("./client/client.module");
const admin_model_1 = require("./admin/model/admin.model");
const client_model_1 = require("./client/model/client.model");
const mail_module_1 = require("./mail/mail.module");
const mail_service_1 = require("./mail/mail.service");
const avto_module_1 = require("./avto/avto.module");
const avto_ijara_module_1 = require("./avto_ijara/avto_ijara.module");
const images_module_1 = require("./images/images.module");
const companiya_module_1 = require("./companiya/companiya.module");
const type_module_1 = require("./type/type.module");
const status_module_1 = require("./status/status.module");
const time_module_1 = require("./time/time.module");
const avto_egasi_module_1 = require("./avto_egasi/avto_egasi.module");
const companiya_model_1 = require("./companiya/model/companiya.model");
const image_model_1 = require("./images/model/image.model");
const status_model_1 = require("./status/model/status.model");
const time_model_1 = require("./time/model/time.model");
const type_model_1 = require("./type/model/type.model");
const avto_model_1 = require("./avto/model/avto.model");
const avto_egasi_model_1 = require("./avto_egasi/model/avto_egasi.model");
const avto_ijara_model_1 = require("./avto_ijara/model/avto_ijara.model");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
            sequelize_1.SequelizeModule.forRoot({
                dialect: "postgres",
                host: process.env.POSTGRES_HOST,
                port: Number(process.env.POSTGRES_PORT),
                username: process.env.POSTGRES_USER,
                password: String(process.env.POSTGRES_PASSWORD),
                database: process.env.POSTGRES_DB,
                models: [admin_model_1.Admin, client_model_1.Client, companiya_model_1.Companiya, image_model_1.Images, status_model_1.Status, time_model_1.Time, avto_model_1.Avto, avto_egasi_model_1.AvtoEgasi, avto_ijara_model_1.AvtoIjara, type_model_1.Type],
                autoLoadModels: true,
                logging: false,
            }),
            admin_module_1.AdminModule,
            client_module_1.ClientModule,
            mail_module_1.MailModule,
            avto_module_1.AvtoModule,
            avto_ijara_module_1.AvtoIjaraModule,
            images_module_1.ImagesModule,
            companiya_module_1.CompaniyaModule,
            type_module_1.TypeModule,
            status_module_1.StatusModule,
            time_module_1.TimeModule,
            avto_egasi_module_1.AvtoEgasiModule,
        ],
        controllers: [],
        providers: [mail_service_1.MailService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map