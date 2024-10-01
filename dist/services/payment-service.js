var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { PaymentRepository } from '../repositories/payment-repository.js';
import { Payment } from '../models/payment-model.js';
export class PaymentService {
    constructor() {
        this.paymentRepository = new PaymentRepository();
    }
    createPayment(jobId, paymentValue, operationDate) {
        return __awaiter(this, void 0, void 0, function* () {
            if (paymentValue < 0) {
                throw new Error("Payment value must be positive.");
            }
            try {
                const payment = yield Payment.create({
                    jobId,
                    paymentValue,
                    operationDate,
                });
                return payment;
            }
            catch (error) {
                throw new Error(`Unable to create payment: ${error.message}`);
            }
        });
    }
    getAllPayments() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Payment.findAll();
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(`Unable to fetch payments: ${error.message}`);
                }
                else {
                    throw new Error("An unknown error occurred.");
                }
            }
        });
    }
    getPaymentById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payment = yield Payment.findByPk(id);
                if (!payment) {
                    throw new Error(`Payment with ID ${id} not found.`);
                }
                return payment;
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(`Unable to fetch payment with ID ${id}: ${error.message}`);
                }
                else {
                    throw new Error("An unknown error occurred.");
                }
            }
        });
    }
    updatePayment(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payment = yield Payment.findByPk(id);
                if (!payment) {
                    return null;
                }
                yield payment.update(data);
                return payment;
            }
            catch (error) {
                throw new Error(`Unable to update payment with ID ${id}: ${error.message}`);
            }
        });
    }
    deletePayment(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payment = yield Payment.findByPk(id);
                if (!payment) {
                    return false;
                }
                yield payment.destroy();
                return true;
            }
            catch (error) {
                throw new Error(`Unable to delete payment with ID ${id}: ${error.message}`);
            }
        });
    }
    getPaymentsByJob(jobId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.paymentRepository.findByJobId(jobId);
            }
            catch (error) {
                throw new Error(`Unable to fetch payments for job ID ${jobId}: ${error.message}`);
            }
        });
    }
}
