"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobService = void 0;
const job_model_1 = require("../models/job-model");
const job_repository_1 = require("../repositories/job-repository");
class JobService {
    constructor() {
        this.jobRepository = new job_repository_1.JobRepository;
    }
    createJob(contractId, operationDate, paymentDate, price, paid) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const job = yield job_model_1.Job.create({
                    contractId,
                    operationDate: new Date(),
                    paymentDate: new Date(),
                    price,
                    paid,
                });
                return job;
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(`Unable to create job: ${error.message}`);
                }
                else {
                    throw new Error("An unknown error occurred.");
                }
            }
        });
    }
    getJobById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const job = yield job_model_1.Job.findByPk(id);
                if (!job) {
                    throw new Error(`Job with ID ${id} not found.`);
                }
                return job;
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(`Unable to fetch job with ID ${id}: ${error.message}`);
                }
                else {
                    throw new Error("An unknown error occurred.");
                }
            }
        });
    }
    getJobsByContract(contractId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield job_model_1.Job.findAll({ where: { contractId } });
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(`Unable to fetch jobs for contract ID ${contractId}: ${error.message}`);
                }
                else {
                    throw new Error("An unknown error occurred.");
                }
            }
        });
    }
    updateJob(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const job = yield this.getJobById(id);
                if (job) {
                    return yield job.update(data);
                }
                return null;
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(`Unable to update job: ${error.message}`);
                }
                else {
                    throw new Error("An unknown error occurred.");
                }
            }
        });
    }
    deleteJob(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const job = yield this.getJobById(id);
                if (job) {
                    yield job.destroy();
                    return true;
                }
                return false;
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(`Unable to deletejob: ${error.message}`);
                }
                else {
                    throw new Error("An unknown error occurred.");
                }
            }
        });
    }
    getUnpaidJobsTotal() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.jobRepository.sumUnpaidJobs();
            }
            catch (error) {
                console.error('Error while summing unpaid jobs:', error);
                throw new Error('Failed to retrieve unpaid jobs total');
            }
        });
    }
}
exports.JobService = JobService;
