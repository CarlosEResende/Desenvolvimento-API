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
exports.PaymentController = void 0;
const payment_service_1 = require("../services/payment-service");
class PaymentController {
    constructor() {
        this.paymentService = new payment_service_1.PaymentService();
    }
    createPayment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { jobId, paymentValue, operationDate } = req.body;
            try {
                const payment = yield this.paymentService.createPayment(jobId, paymentValue, operationDate);
                return res.status(201).json(payment);
            }
            catch (error) {
                return res.status(500).json({ message: "Failed to create payment", error });
            }
        });
    }
    getAllPayments(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payments = yield this.paymentService.getAllPayments();
                return res.status(200).json(payments);
            }
            catch (error) {
                return res.status(500).json({ message: "Failed to fetch payments", error });
            }
        });
    }
    getPaymentById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const payment = yield this.paymentService.getPaymentById(Number(id));
                if (!payment) {
                    return res.status(404).json({ message: "Payment not found" });
                }
                return res.status(200).json(payment);
            }
            catch (error) {
                return res.status(500).json({ message: "Failed to fetch payment", error });
            }
        });
    }
    updatePayment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { jobId, paymentValue, operationDate } = req.body;
            try {
                const updatedPayment = yield this.paymentService.updatePayment(Number(id), { jobId, paymentValue, operationDate });
                if (!updatedPayment) {
                    return res.status(404).json({ message: "Payment not found" });
                }
                return res.status(200).json(updatedPayment);
            }
            catch (error) {
                return res.status(500).json({ message: "Failed to update payment", error });
            }
        });
    }
    deletePayment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const success = yield this.paymentService.deletePayment(Number(id));
                if (!success) {
                    return res.status(404).json({ message: "Payment not found" });
                }
                return res.status(204).send();
            }
            catch (error) {
                return res.status(500).json({ message: "Failed to delete payment", error });
            }
        });
    }
    getPaymentsByJob(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { jobId } = req.params;
            try {
                const payments = yield this.paymentService.getPaymentsByJob(Number(jobId));
                return res.status(200).json(payments);
            }
            catch (error) {
                return res.status(500).json({ message: "Failed to fetch payments for job", error });
            }
        });
    }
}
exports.PaymentController = PaymentController;
