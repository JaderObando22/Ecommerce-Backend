"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateContryeDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_contrye_dto_1 = require("./create-contrye.dto");
class UpdateContryeDto extends (0, mapped_types_1.PartialType)(create_contrye_dto_1.CreateContryeDto) {
}
exports.UpdateContryeDto = UpdateContryeDto;
//# sourceMappingURL=update-contrye.dto.js.map