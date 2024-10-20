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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepositRepository = void 0;
const deposit_model_1 = require("../models/deposit-model");
class DepositRepository {
    createDeposit(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield deposit_model_1.Deposit.create(data);
            }
            catch (error) {
                throw new Error(`Unable to create deposit: ${error.message}`);
            }
        });
    }
    findAllDeposit() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield deposit_model_1.Deposit.findAll();
            }
            catch (error) {
                throw new Error(`Unable to fetch deposits: ${error.message}`);
            }
        });
    }
    findDepositById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield deposit_model_1.Deposit.findByPk(id);
            }
            catch (error) {
                throw new Error(`Unable to fetch deposit with ID: ${error.message}`);
            }
        });
    }
    updateDeposit(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const deposit = yield this.findDepositById(id);
            if (deposit) {
                return yield deposit.update(data);
            }
            return null;
        });
    }
    deleteDeposit(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deposit = yield this.findDepositById(id);
            if (deposit) {
                yield deposit.destroy();
                return true;
            }
            return false;
        });
    }
}
exports.DepositRepository = DepositRepository;
