"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTypeDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_type_dto_1 = require("./create-type.dto");
class UpdateTypeDto extends (0, swagger_1.PartialType)(create_type_dto_1.CreateTypeDto) {
}
exports.UpdateTypeDto = UpdateTypeDto;
//# sourceMappingURL=update-type.dto.js.map