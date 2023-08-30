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
exports.Companiya = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const avto_ijara_model_1 = require("../../avto_ijara/model/avto_ijara.model");
let Companiya = exports.Companiya = class Companiya extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], Companiya.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Rent car", description: "Companiya name" }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Companiya.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "Toshkent shaxri",
        description: "Companiya addressi",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Companiya.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "+998901234567",
        description: "Companiya telefon raqami",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Companiya.prototype, "phone_number", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => avto_ijara_model_1.AvtoIjara),
    __metadata("design:type", Array)
], Companiya.prototype, "avtoIjara", void 0);
exports.Companiya = Companiya = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "companiya" })
], Companiya);
//# sourceMappingURL=companiya.model.js.map