"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
test('deve criar um novo perfil com sucesso', () => __awaiter(void 0, void 0, void 0, function* () {
    const newProfileData = {
        firstname: 'João',
        lastname: 'Silva',
        profession: 'Desenvolvedor',
        type: 'Pessoal',
        balance: 1000.00
    };
    const response = yield (0, supertest_1.default)(app_1.default)
        .post('/profiles')
        .send(newProfileData);
    expect(response.status).toBe(201);
    expect(response.body.firstname).toBe(newProfileData.firstname);
    expect(response.body.lastname).toBe(newProfileData.lastname);
    expect(response.body.profession).toBe(newProfileData.profession);
    expect(response.body.type).toBe(newProfileData.type);
    expect(response.body.balance).toBe(newProfileData.balance);
}));
test('deve retornar 400 se os dados estiverem incompletos', () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield (0, supertest_1.default)(app_1.default)
        .post('/profiles')
        .send({});
    expect(response.status).toBe(400);
    expect(response.body.message).toBeDefined();
}));
