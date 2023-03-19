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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GendersController = void 0;
const common_1 = require("@nestjs/common");
const genders_service_1 = require("./genders.service");
const create_gender_dto_1 = require("./dto/create-gender.dto");
const update_gender_dto_1 = require("./dto/update-gender.dto");
let GendersController = class GendersController {
    constructor(gendersService) {
        this.gendersService = gendersService;
    }
    create(createGenderDto) {
        return this.gendersService.create(createGenderDto);
    }
    findAll() {
        return this.gendersService.findAll();
    }
    findOne(id) {
        return this.gendersService.findOne(+id);
    }
    update(id, updateGenderDto) {
        return this.gendersService.update(+id, updateGenderDto);
    }
    remove(id) {
        return this.gendersService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_gender_dto_1.CreateGenderDto]),
    __metadata("design:returntype", void 0)
], GendersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GendersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GendersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_gender_dto_1.UpdateGenderDto]),
    __metadata("design:returntype", void 0)
], GendersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GendersController.prototype, "remove", null);
GendersController = __decorate([
    (0, common_1.Controller)('genders'),
    __metadata("design:paramtypes", [genders_service_1.GendersService])
], GendersController);
exports.GendersController = GendersController;
//# sourceMappingURL=genders.controller.js.map