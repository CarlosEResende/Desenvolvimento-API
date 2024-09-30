import { Payment} from "../models/payment-model";

export class PaymentService {
    public async createPayment(jobId: number, paymentValue: number): Promise<Payment> {
        if (paymentValue < 0) {
            throw new Error("Payment value must be positive.");
        }

        try {
            const payment = await Payment.create({
                jobId,
                paymentValue,
                operationDate: new Date(),
            });
            return payment;
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Unable to create payment: ${error.message}`);
            } else {
                throw new Error("An unknown error occurred.");
            }
        }
    }

    public async getPaymentsByJob(jobId: number): Promise<Payment[]> {
        try {
            return await Payment.findAll({ where: { jobId } });
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Unable to fetch payments for job ID ${jobId}: ${error.message}`);
            } else {
                throw new Error("An unknown error occurred.");
            }
        }
    }
}
