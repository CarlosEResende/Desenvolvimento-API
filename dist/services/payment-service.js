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
export class PaymentService {
    createPayment(jobId, paymentValue) {
        return __awaiter(this, void 0, void 0, function* () {
            if (paymentValue < 0) {
                throw new Error("Payment value must be positive.");
            }
            try {
                const payment = yield Payment.create({
                    jobId,
                    paymentValue,
                    operationDate: new Date(),
                });
                return payment;
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(`Unable to create payment: ${error.message}`);
                }
                else {
                    throw new Error("An unknown error occurred.");
                }
            }
        });
    }
    getPaymentsByJob(jobId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Payment.findAll({ where: { jobId } });
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(`Unable to fetch payments for job ID ${jobId}: ${error.message}`);
                }
                else {
                    throw new Error("An unknown error occurred.");
                }
            }
        });
    }
}
