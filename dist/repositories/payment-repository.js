var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Payment } from "../models/payment-model";
export class PaymentRepository {
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Payment.create(data);
            }
            catch (error) {
                throw new Error(`Unable to create payment: ${error.message}`);
            }
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Payment.findAll();
            }
            catch (error) {
                throw new Error(`Unable to fetch payments: ${error.message}`);
            }
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Payment.findByPk(id);
            }
            catch (error) {
                throw new Error(`Unable to fetch payments with ID: ${error.message}`);
            }
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const payment = yield this.findById(id);
            if (payment) {
                return yield payment.update(data);
            }
            return null;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const payment = yield this.findById(id);
            if (payment) {
                yield payment.destroy();
                return true;
            }
            return false;
        });
    }
}
