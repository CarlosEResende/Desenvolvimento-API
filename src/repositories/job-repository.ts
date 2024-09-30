import { Op } from "sequelize";
import { Job, JobCreationAttributes } from "../models/job-model.js";
import sequelize from "sequelize";

export class JobRepository {

    public async create(data: JobCreationAttributes): Promise<Job> {
        try {
            return await Job.create(data);
        } catch (error) {
            throw new Error(`Unable to create job: ${(error as Error).message}`);
        }
    }

    public async findAll(): Promise<Job[]> {
        try {
            return await Job.findAll();
        } catch (error) {
            throw new Error(`Unable to fetch jobs: ${(error as Error).message}`);
        }
    }

    public async findById(id: number): Promise<Job | null> {
        try {
            return await Job.findByPk(id);
        } catch (error) {
            throw new Error(`Unable to fetch job with ID: ${(error as Error).message}`);
        }
    }

    public async updateJob(id: number, data: Partial<JobCreationAttributes>): Promise<Job | null> {
        const job = await this.findById(id);
        if (job) {
            return await job.update(data);
        }
        return null;
    }

    public async deleteJob(id: number): Promise<boolean> {
        const job = await this.findById(id);
        if (job) {
            await job.destroy();
            return true;
        }
        return false;
    }

    
    

    
}
