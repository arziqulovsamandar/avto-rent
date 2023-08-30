"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTimeDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_time_dto_1 = require("./create-time.dto");
class UpdateTimeDto extends (0, swagger_1.PartialType)(create_time_dto_1.CreateTimeDto) {
}
exports.UpdateTimeDto = UpdateTimeDto;
//# sourceMappingURL=update-time.dto.js.map