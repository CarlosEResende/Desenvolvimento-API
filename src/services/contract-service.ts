import { Contract, ContractCreationAttributes } from "../models/contract-model";

export class ContractService {
    
    public async createContract(data: ContractCreationAttributes): Promise<Contract> {
        try {
            return await Contract.create(data);
        } catch (error) {
            throw new Error(`Unable to create contract: ${(error as Error).message}`);
        }
    }

    public async getAllContracts(): Promise<Contract[]> {
        try {
            return await Contract.findAll();
        } catch (error) {
            throw new Error(`Unable to fetch contracts: ${(error as Error).message}`);
        }
    }


    public async getContractsByProfile(profileId: number): Promise<Contract[]> {
        try {
            return await Contract.findAll({ where: { profileId } });
        } catch (error) {
            throw new Error(`Unable to fetch contracts for profile ID ${profileId}: ${(error as Error).message}`);
        }
    }

    public async updateContract(id: number, data: Partial<ContractCreationAttributes>): Promise<Contract | null> {
        try {
            const contract = await this.findById(id); 
            if (contract) {
                return await contract.update(data);
            }
            return null;
        } catch (error) {
            throw new Error(`Unable to update contract: ${(error as Error).message}`);
        }
    }

    public async deleteContract(id: number): Promise<boolean> {
        try {
            const contract = await this.findById(id); 
            if (contract) {
                await contract.destroy();
                return true;
            }
            return false;
        } catch (error) {
            throw new Error(`Unable to delete contract: ${(error as Error).message}`);
        }
    }

    private async findById(id: number): Promise<Contract | null> {
        try {
            return await Contract.findByPk(id);
        } catch (error) {
            throw new Error(`Unable to find contract with ID: ${(error as Error).message}`);
        }
    }
}
