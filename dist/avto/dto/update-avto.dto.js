"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAvtoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_avto_dto_1 = require("./create-avto.dto");
class UpdateAvtoDto extends (0, swagger_1.PartialType)(create_avto_dto_1.CreateAvtoDto) {
}
exports.UpdateAvtoDto = UpdateAvtoDto;
//# sourceMappingURL=update-avto.dto.js.map