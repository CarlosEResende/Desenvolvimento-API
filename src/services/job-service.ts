import { Job } from "../models/job-model"; 

export class JobService {
    public async getUnpaidJobsSum(): Promise<number> {
        try {
            const unpaidJobs = await Job.findAll({ where: { paid: 0 } });
            const totalSum = unpaidJobs.reduce((totalSum, job) => totalSum + job.price, 0);
            return totalSum;
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Unable to calculate unpaid jobs sum: ${error.message}`);
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
}
