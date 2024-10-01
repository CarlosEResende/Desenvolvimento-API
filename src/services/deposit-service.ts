import { Deposit } from "../models/deposit-model.js";

export class DepositService {
    
    public async createDeposit(profileId: number, depositValue: number): Promise<Deposit> {
        if (depositValue <= 0) {
            throw new Error("Deposit value must be positive and cannot be zero.");
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

    public async getDepositById(id: number): Promise<Deposit | null> {
        try {
            const deposit = await Deposit.findByPk(id);
            if (!deposit) {
                throw new Error(`Deposit with ID ${id} not found.`);
            }
            return deposit;
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Unable to fetch deposit with ID ${id}: ${error.message}`);
            } else {
                throw new Error("An unknown error occurred.");
            }
        }
    }

    public async updateDeposit(id: number, data: Partial<{ depositValue: number }>): Promise<Deposit | null> {
        try {
            const deposit = await this.getDepositById(id);
            if (deposit) {
                return await deposit.update(data);
            }
            return null; 
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Unable to update deposit: ${error.message}`);
            } else {
                throw new Error("An unknown error occurred.");
            }
        }
    }

    public async deleteDeposit(id: number): Promise<boolean> {
        try {
            const deposit = await this.getDepositById(id);
            if (deposit) {
                await deposit.destroy();
                return true; 
            }
            return false; 
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Unable to delete deposit: ${error.message}`);
            } else {
                throw new Error("An unknown error occurred.");
            }
        }
    }
}

