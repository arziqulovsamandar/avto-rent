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
exports.AvtoEgasi = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const avto_model_1 = require("../../avto/model/avto.model");
let AvtoEgasi = exports.AvtoEgasi = class AvtoEgasi extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], AvtoEgasi.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "name", description: "avtoegasi name" }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], AvtoEgasi.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "ega@gmail.com",
        description: "avto egasi emaili",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], AvtoEgasi.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "+998901234567",
        description: "avto egasi telefon raqami",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], AvtoEgasi.prototype, "phone_number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: "Avto id" }),
    (0, sequelize_typescript_1.ForeignKey)(() => avto_model_1.Avto),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], AvtoEgasi.prototype, "avto_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => avto_model_1.Avto),
    __metadata("design:type", avto_model_1.Avto)
], AvtoEgasi.prototype, "avto", void 0);
exports.AvtoEgasi = AvtoEgasi = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: " avto_egasi" })
], AvtoEgasi);
//# sourceMappingURL=avto_egasi.model.js.map