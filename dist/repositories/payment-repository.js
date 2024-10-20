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
exports.PaymentRepository = void 0;
const payment_model_1 = require("../models/payment-model");
class PaymentRepository {
    createPayment(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield payment_model_1.Payment.create(data);
            }
            catch (error) {
                throw new Error(`Unable to create payment: ${error.message}`);
            }
        });
    }
    findAllPayment() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield payment_model_1.Payment.findAll();
            }
            catch (error) {
                throw new Error(`Unable to fetch payments: ${error.message}`);
            }
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield payment_model_1.Payment.findByPk(id);
            }
            catch (error) {
                throw new Error(`Unable to fetch payments with ID: ${error.message}`);
            }
        });
    }
    findByJobId(jobId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield payment_model_1.Payment.findAll({ where: { jobId } });
            }
            catch (error) {
                throw new Error(`Unable to fetch payments for job ID ${jobId}: ${error.message}`);
            }
        });
    }
    updatePayment(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const payment = yield this.findById(id);
            if (payment) {
                return yield payment.update(data);
            }
            return null;
        });
    }
    deletePayment(id) {
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
exports.PaymentRepository = PaymentRepository;
