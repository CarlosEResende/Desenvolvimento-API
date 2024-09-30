import { Request, Response } from 'express';
import { JobService } from '../services/job-service.js';

export class JobController {
    private jobService = new JobService();

    public async createJob(req: Request, res: Response): Promise<Response> {
        const { contractId, operationDate, paymentDate, price, paid } = req.body;

        try {
            const job = await this.jobService.createJob(contractId, operationDate, paymentDate, price, paid);
            return res.status(201).json(job);
        } catch (error) {
            return res.status(500).json({ message: "Failed to create job", error });
        }
    }

    public async getJobById(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        try {
            const job = await this.jobService.getJobById(Number(id));
            if (!job) {
                return res.status(404).json({ message: "Job not found" });
            }
            return res.status(200).json(job);
        } catch (error) {
            return res.status(500).json({ message: "Failed to fetch job", error });
        }
    }

    public async updateJob(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const { contractId, operationDate, paymentDate, price, paid } = req.body; 

        try {
            const updatedJob = await this.jobService.updateJob(Number(id), { contractId, operationDate, paymentDate, price, paid });
            if (!updatedJob) {
                return res.status(404).json({ message: "Job not found" });
            }
            return res.status(200).json(updatedJob);
        } catch (error) {
            return res.status(500).json({ message: "Failed to update job", error: error instanceof Error ? error.message : error });
        }
    }

    public async deleteJob(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        try {
            const success = await this.jobService.deleteJob(Number(id));
            if (!success) {
                return res.status(404).json({ message: "Job not found" });
            }
            return res.status(204).send(); 
        } catch (error) {
            return res.status(500).json({ message: "Failed to delete job", error });
        }
    }

    public async getJobsByContract(req: Request, res: Response): Promise<Response> {
        const { contractId } = req.params;

        try {
            const jobs = await this.jobService.getJobsByContract(Number(contractId));
            return res.status(200).json(jobs);
        } catch (error) {
            return res.status(500).json({ message: "An unknown error occurred.", error });
        }
    }
}
