import { Contract } from "../models/contract-model"; 

export class ContractService {
    public async createContract(data: any): Promise<Contract> {
        try {
            return await Contract.create(data);
        } catch (error) {
            throw new Error(`Unable to create contract: ${(error as Error).message}`);
        }
    }

    public async getContractsByProfile(profileId: number): Promise<Contract[]> {
        try {
            return await Contract.findAll({ where: { profileId } });
        } catch (error) {
            throw new Error(`Unable to fetch contracts for profile ID ${profileId}: ${(error as Error).message}`);
        }
    }
}
