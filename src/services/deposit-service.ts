import { Deposit } from "../models/deposit-model.js";

export class DepositService {
    
    public async createDeposit(profileId: number, depositValue: number): Promise<Deposit> {
        if (depositValue < 0) {
            throw new Error("Deposit value must be positive.");
        }

        try {
            const deposit = await Deposit.create({
                profileId,
                operationDate: new Date(), 
                depositValue,
            });
            return deposit;
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Unable to create deposit: ${error.message}`);
            } else {
                throw new Error("An unknown error occurred.");
            }
        }
    }

    public async getAllDeposits(): Promise<Deposit[]> {
        try {
            return await Deposit.findAll();
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Unable to fetch deposits: ${error.message}`);
            } else {
                throw new Error("An unknown error occurred.");
            }
        }
    }
}
