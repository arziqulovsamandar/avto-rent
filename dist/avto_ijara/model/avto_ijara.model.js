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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvtoIjara = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const companiya_model_1 = require("../../companiya/model/companiya.model");
const client_model_1 = require("../../client/model/client.model");
const avto_model_1 = require("../../avto/model/avto.model");
const time_model_1 = require("../../time/model/time.model");
let AvtoIjara = exports.AvtoIjara = class AvtoIjara extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], AvtoIjara.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: "Companiya id" }),
    (0, sequelize_typescript_1.ForeignKey)(() => companiya_model_1.Companiya),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], AvtoIjara.prototype, "companiya_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => companiya_model_1.Companiya),
    __metadata("design:type", companiya_model_1.Companiya)
], AvtoIjara.prototype, "companiya", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: "Client id" }),
    (0, sequelize_typescript_1.ForeignKey)(() => client_model_1.Client),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], AvtoIjara.prototype, "client_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => client_model_1.Client),
    __metadata("design:type", client_model_1.Client)
], AvtoIjara.prototype, "client", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: "Avto id" }),
    (0, sequelize_typescript_1.ForeignKey)(() => avto_model_1.Avto),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], AvtoIjara.prototype, "avto_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => avto_model_1.Avto),
    __metadata("design:type", avto_model_1.Avto)
], AvtoIjara.prototype, "avto", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: "Time id" }),
    (0, sequelize_typescript_1.ForeignKey)(() => time_model_1.Time),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], AvtoIjara.prototype, "time_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => time_model_1.Time),
    __metadata("design:type", time_model_1.Time)
], AvtoIjara.prototype, "time", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "2023-08-06",
        description: " boshlanish vaqti",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
        allowNull: false,
    }),
    __metadata("design:type", Date)
], AvtoIjara.prototype, "start_time", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "2023-08-06",
        description: " tugash vaqti",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
        allowNull: false,
    }),
    __metadata("design:type", Date)
], AvtoIjara.prototype, "end_time", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "200000", description: "narxi" }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], AvtoIjara.prototype, "price", void 0);
exports.AvtoIjara = AvtoIjara = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: " avto_ijara" })
], AvtoIjara);
//# sourceMappingURL=avto_ijara.model.js.map