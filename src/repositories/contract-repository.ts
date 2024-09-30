import { Contract, ContractCreationAttributes } from "../models/contract-model.js";

export class ContractRepository {
    public async create(data: ContractCreationAttributes): Promise<Contract> {
        try {
            return await Contract.create(data);
        } catch (error) {
            throw new Error(`Unable to create contract: ${(error as Error).message}`);
        }
    }

    
    public async findById(id: number): Promise<Contract | null> {
        try {
            return await Contract.findByPk(id);
        } catch (error) {
            throw new Error(`Unable to fetch contract with ID: ${(error as Error).message}`);
        }
    }

    public async updateContract(id: number, data: Partial<ContractCreationAttributes>): Promise<Contract | null> {
        const contract = await this.findById(id);
        if (contract) {
            return await contract.update(data);
        }
        return null;
    }

    public async deleteContract(id: number): Promise<boolean> {
        const contract = await this.findById(id);
        if (contract) {
            await contract.destroy();
            return true;
        }
        return false;
    }

    public async findByProfileId(profileId: number): Promise<Contract[]> {
        try {
            return await Contract.findAll({ where: { profileId } });
        } catch (error) {
            throw new Error(`Unable to fetch contracts for profile ID: ${(error as Error).message}`);
        }
    }

    public async findAllContracts(): Promise<Contract[]> {
        try {
            return await Contract.findAll();
        } catch (error) {
            throw new Error(`Unable to fetch contracts: ${(error as Error).message}`);
        }
    }
}
