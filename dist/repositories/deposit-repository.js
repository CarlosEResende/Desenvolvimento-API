var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Deposit } from "../models/deposit-model";
export class DepositRepository {
    createDeposit(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Deposit.create(data);
            }
            catch (error) {
                throw new Error(`Unable to create deposit: ${error.message}`);
            }
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Deposit.findAll();
            }
            catch (error) {
                throw new Error(`Unable to fetch deposits: ${error.message}`);
            }
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Deposit.findByPk(id);
            }
            catch (error) {
                throw new Error(`Unable to fetch deposit with ID: ${error.message}`);
            }
        });
    }
    updateDeposit(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const deposit = yield this.findById(id);
            if (deposit) {
                return yield deposit.update(data);
            }
            return null;
        });
    }
    deleteDeposit(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deposit = yield this.findById(id);
            if (deposit) {
                yield deposit.destroy();
                return true;
            }
            return false;
        });
    }
}
