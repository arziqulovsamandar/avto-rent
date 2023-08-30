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
exports.CreateAvtoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateAvtoDto {
}
exports.CreateAvtoDto = CreateAvtoDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: "type id" }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateAvtoDto.prototype, "type_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: "status id" }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateAvtoDto.prototype, "status_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "mers", description: "Avto name" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateAvtoDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "12.12.2000", description: "avto yili" }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], CreateAvtoDto.prototype, "yili", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "111",
        description: "avto nomeri",
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAvtoDto.prototype, "nomeri", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "benzin", description: "Avto yoqilgi_turi" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateAvtoDto.prototype, "yoqilgi_turi", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "12Sws ", description: "avto loakasiyasi" }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateAvtoDto.prototype, "lokatsiya", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "120Kw",
        description: "avto ot_kuchi",
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateAvtoDto.prototype, "ot_kuchi", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "12l ", description: "avto yoqilgi sarfi" }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateAvtoDto.prototype, "yoqilgi_sarfi", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "1,2 l",
        description: "avto mator sigimi",
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateAvtoDto.prototype, "mator_sigimi", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "lukus",
        description: "avto  kondensioneri",
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateAvtoDto.prototype, "kondensioneri", void 0);
//# sourceMappingURL=create-avto.dto.js.map