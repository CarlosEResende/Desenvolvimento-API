var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Deposit } from "../models/deposit-model.js";
export class DepositService {
    createDeposit(profileId, depositValue) {
        return __awaiter(this, void 0, void 0, function* () {
            if (depositValue < 0) {
                throw new Error("Deposit value must be positive.");
            }
            try {
                const deposit = yield Deposit.create({
                    profileId,
                    operationDate: new Date(),
                    depositValue,
                });
                return deposit;
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(`Unable to create deposit: ${error.message}`);
                }
                else {
                    throw new Error("An unknown error occurred.");
                }
            }
        });
    }
    getAllDeposits() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Deposit.findAll();
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(`Unable to fetch deposits: ${error.message}`);
                }
                else {
                    throw new Error("An unknown error occurred.");
                }
            }
        });
    }
    getDepositById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deposit = yield Deposit.findByPk(id);
                if (!deposit) {
                    throw new Error(`Deposit with ID ${id} not found.`);
                }
                return deposit;
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(`Unable to fetch deposit with ID ${id}: ${error.message}`);
                }
                else {
                    throw new Error("An unknown error occurred.");
                }
            }
        });
    }
    updateDeposit(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deposit = yield this.getDepositById(id);
                if (deposit) {
                    return yield deposit.update(data);
                }
                return null;
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(`Unable to update deposit: ${error.message}`);
                }
                else {
                    throw new Error("An unknown error occurred.");
                }
            }
        });
    }
    deleteDeposit(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deposit = yield this.getDepositById(id);
                if (deposit) {
                    yield deposit.destroy();
                    return true;
                }
                return false;
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(`Unable to delete deposit: ${error.message}`);
                }
                else {
                    throw new Error("An unknown error occurred.");
                }
            }
        });
    }
}
