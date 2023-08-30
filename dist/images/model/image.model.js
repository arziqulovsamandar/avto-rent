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
exports.Images = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const avto_model_1 = require("../../avto/model/avto.model");
let Images = exports.Images = class Images extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], Images.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "images", description: "avto images" }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Images.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: "Avto id" }),
    (0, sequelize_typescript_1.ForeignKey)(() => avto_model_1.Avto),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Images.prototype, "avto_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => avto_model_1.Avto),
    __metadata("design:type", avto_model_1.Avto)
], Images.prototype, "avto", void 0);
exports.Images = Images = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "images" })
], Images);
//# sourceMappingURL=image.model.js.map