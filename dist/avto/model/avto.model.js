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
exports.Avto = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const avto_ijara_model_1 = require("../../avto_ijara/model/avto_ijara.model");
const status_model_1 = require("../../status/model/status.model");
const type_model_1 = require("../../type/model/type.model");
const avto_egasi_model_1 = require("../../avto_egasi/model/avto_egasi.model");
const image_model_1 = require("../../images/model/image.model");
let Avto = exports.Avto = class Avto extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], Avto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Mers", description: "Avto name" }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Avto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "12.12.2000",
        description: "Avto date",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
        allowNull: false,
    }),
    __metadata("design:type", Date)
], Avto.prototype, "yili", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "123",
        description: "Avto nomeri",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Avto.prototype, "numeri", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Benzin", description: "Avto yoqilgisi" }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Avto.prototype, "yoqilgi_turi", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "75HX+M4 Tashkent, Uzbekistan",
        description: "Avto lokatsiya",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Avto.prototype, "lokatsiya", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "120Kw",
        description: "Avto ot_kuchi",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Avto.prototype, "ot_kuchi", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "12l", description: "Avto yoqilgisi" }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Avto.prototype, "yoqilgi_sarfi", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "2l",
        description: "Avto mator sigimi",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Avto.prototype, "mator_sigimi", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "lukus",
        description: "Avto kondensioner",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Avto.prototype, "kondensioneri", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: "status id" }),
    (0, sequelize_typescript_1.ForeignKey)(() => status_model_1.Status),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Avto.prototype, "status_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => status_model_1.Status),
    __metadata("design:type", status_model_1.Status)
], Avto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: "Type id" }),
    (0, sequelize_typescript_1.ForeignKey)(() => type_model_1.Type),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Avto.prototype, "type_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => type_model_1.Type),
    __metadata("design:type", type_model_1.Type)
], Avto.prototype, "type", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => avto_ijara_model_1.AvtoIjara),
    __metadata("design:type", Array)
], Avto.prototype, "avtoIjara", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => avto_egasi_model_1.AvtoEgasi),
    __metadata("design:type", Array)
], Avto.prototype, "avtoEgasi", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => image_model_1.Images),
    __metadata("design:type", Array)
], Avto.prototype, "images", void 0);
exports.Avto = Avto = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: " avto" })
], Avto);
//# sourceMappingURL=avto.model.js.map