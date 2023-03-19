"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContryesService = void 0;
const common_1 = require("@nestjs/common");
const db = [
    {
        id: 1,
        name: 'Nicaragua',
    },
    {
        id: 2,
        name: 'Costa Rica',
    },
    {
        id: 3,
        name: 'Colombia',
    }
];
let ContryesService = class ContryesService {
    create(createContryeDto) {
        return 'This action adds a new contrye';
    }
    findAll() {
        return db;
    }
    findOne(id) {
        return `This action returns a #${id} contrye`;
    }
    update(id, updateContryeDto) {
        return `This action updates a #${id} contrye`;
    }
    remove(id) {
        return `This action removes a #${id} contrye`;
    }
};
ContryesService = __decorate([
    (0, common_1.Injectable)()
], ContryesService);
exports.ContryesService = ContryesService;
//# sourceMappingURL=contryes.service.js.map