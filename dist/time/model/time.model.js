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
exports.Time = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const avto_ijara_model_1 = require("../../avto_ijara/model/avto_ijara.model");
let Time = exports.Time = class Time extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], Time.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Time", description: "avto ijara Time" }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Time.prototype, "kunlik", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Time", description: "avto ijara Time" }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Time.prototype, "soatlik", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Time", description: "avto ijara Time" }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Time.prototype, "vaqt_qoshish", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => avto_ijara_model_1.AvtoIjara),
    __metadata("design:type", Array)
], Time.prototype, "avtoIjara", void 0);
exports.Time = Time = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "time" })
], Time);
//# sourceMappingURL=time.model.js.map