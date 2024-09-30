import { Request, Response } from 'express';
import { ContractService } from '../services/contract-service.js';

export class ContractController {
    private contractService = new ContractService();

    public async createContract(req: Request, res: Response): Promise<Response> {
        const { profileId, terms, operationDate, status } = req.body;

        try {
            const contract = await this.contractService.createContract({ profileId, terms, operationDate, status });
            return res.status(201).json(contract);
        } catch (error) {
            return res.status(500).json({ message: "Failed to create contract" });
        }
    }

    public async getAllContracts(req: Request, res: Response): Promise<Response> {
        try {
            const contracts = await this.contractService.getAllContracts();
            return res.status(200).json(contracts);
        } catch (error) {
            return res.status(500).json({ message: "Failed to fetch contracts" });
        }
    }

    public async getContractByProfile(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        try {
            const contracts = await this.contractService.getContractsByProfile(Number(id));
            if (!contracts || contracts.length === 0) {
                return res.status(404).json({ message: "No contracts found for this profile" });
            }
            return res.status(200).json(contracts);
        } catch (error) {
            return res.status(500).json({ message: "Failed to fetch contracts" });
        }
    }

    public async updateContract(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const { terms, operationDate, status } = req.body; 

        try {
            const updatedContract = await this.contractService.updateContract(Number(id), { terms, operationDate, status });
            if (!updatedContract) {
                return res.status(404).json({ message: "Contract not found" });
            }
            return res.status(200).json(updatedContract);
        } catch (error) {
            return res.status(500).json({ message: "Failed to update contract" });
        }
    }

    public async deleteContract(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        try {
            const success = await this.contractService.deleteContract(Number(id));
            if (!success) {
                return res.status(404).json({ message: "Contract not found" });
            }
            return res.status(204).send(); 
        } catch (error) {
            return res.status(500).json({ message: "Failed to delete contract" });
        }
    }
}
