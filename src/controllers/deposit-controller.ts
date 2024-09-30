import { Request, Response } from 'express';
import { DepositService } from '../services/deposit-service.js';

export class DepositController {
    private depositService = new DepositService();

    public async createDeposit(req: Request, res: Response): Promise<Response> {
        const { profileId, depositValue } = req.body;

        try {
            const deposit = await this.depositService.createDeposit(profileId, depositValue);
            return res.status(201).json(deposit);
        } catch (error) {
            return res.status(500).json({ message: "Failed to create deposit", error });
        }
    }

    public async getAllDeposits(req: Request, res: Response): Promise<Response> {
        try {
            const deposits = await this.depositService.getAllDeposits();
            return res.status(200).json(deposits);
        } catch (error) {
            return res.status(500).json({ message: "Failed to fetch deposits", error });
        }
    }

    public async getDepositById(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        try {
            const deposit = await this.depositService.getDepositById(Number(id));
            if (!deposit) {
                return res.status(404).json({ message: "Deposit not found" });
            }
            return res.status(200).json(deposit);
        } catch (error) {
            return res.status(500).json({ message: "Failed to fetch deposit", error });
        }
    }

    public async updateDeposit(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const { depositValue } = req.body; 

        try {
            const updatedDeposit = await this.depositService.updateDeposit(Number(id), { depositValue });
            if (!updatedDeposit) {
                return res.status(404).json({ message: "Deposit not found" });
            }
            return res.status(200).json(updatedDeposit);
        } catch (error) {
            return res.status(500).json({ message: "Failed to update deposit", error });
        }
    }

    public async deleteDeposit(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        try {
            const success = await this.depositService.deleteDeposit(Number(id));
            if (!success) {
                return res.status(404).json({ message: "Deposit not found" });
            }
            return res.status(204).send(); // 204 No Content
        } catch (error) {
            return res.status(500).json({ message: "Failed to delete deposit", error });
        }
    }
}
