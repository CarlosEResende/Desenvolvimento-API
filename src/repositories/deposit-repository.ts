import { Deposit, DepositCreationAttributes } from "../models/deposit-model";

export class DepositRepository {
    public async createDeposit(data: DepositCreationAttributes): Promise<Deposit> {
        try {
            return await Deposit.create(data);
        } catch (error) {
            throw new Error(`Unable to create deposit: ${(error as Error).message}`);
        }
    }

    public async findAll(): Promise<Deposit[]> {
        try {
            return await Deposit.findAll();
        } catch (error) {
            throw new Error(`Unable to fetch deposits: ${(error as Error).message}`);
        }
    }

    public async findById(id: number): Promise<Deposit | null> {
        try {
            return await Deposit.findByPk(id);
        } catch (error) {
            throw new Error(`Unable to fetch deposit with ID: ${(error as Error).message}`);
        }
    }

    public async updateDeposit(id: number, data: Partial<DepositCreationAttributes>): Promise<Deposit | null> {
        const deposit = await this.findById(id);
        if (deposit) {
            return await deposit.update(data);
        }
        return null;
    }

    public async deleteDeposit(id: number): Promise<boolean> {
        const deposit = await this.findById(id);
        if (deposit) {
            await deposit.destroy();
            return true;
        }
        return false;
    }
}
