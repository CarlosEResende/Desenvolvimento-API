import { Job } from "../models/job-model.js"; 

export class JobService {

    public async createJob(contractId: number, operationDate: Date, paymentDate: Date, price: number, paid: number): Promise<Job> {
        
        try {
            const job = await Job.create({
                contractId,
                operationDate: new Date(),
                paymentDate: new Date(), 
                price,
                paid,
            });
            return job;
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Unable to create job: ${error.message}`);
            } else {
                throw new Error("An unknown error occurred.");
            }
        }
    }

    public async getJobById(id: number): Promise<Job | null> {
        try {
            const job = await Job.findByPk(id);
            if (!job) {
                throw new Error(`Job with ID ${id} not found.`);
            }
            return job;
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Unable to fetch job with ID ${id}: ${error.message}`);
            } else {
                throw new Error("An unknown error occurred.");
            }
        }
    }

    public async getJobsByContract(contractId: number): Promise<Job[]> {
        try {
            return await Job.findAll({ where: { contractId } });
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Unable to fetch jobs for contract ID ${contractId}: ${error.message}`);
            } else {
                throw new Error("An unknown error occurred.");
            }
        }
    }

    public async updateJob(id: number, data: Partial<{ contractId: number, operationDate: Date, paymentDate: Date, price: number, paid: number }>): Promise<Job | null> {
        try {
            const job = await this.getJobById(id);
            if (job) {
                return await job.update(data);
            }
            return null; 
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Unable to update job: ${error.message}`);
            } else {
                throw new Error("An unknown error occurred.");
            }
        }
    }

    public async deleteJob(id: number): Promise<boolean> {
        try {
            const job = await this.getJobById(id);
            if (job) {
                await job.destroy();
                return true; 
            }
            return false; 
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Unable to deletejob: ${error.message}`);
            } else {
                throw new Error("An unknown error occurred.");
            }
        }
    }
}
