var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Job } from "../models/job-model.js";
export class JobService {
    createJob(contractId, operationDate, paymentDate, price, paid) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const job = yield Job.create({
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
                const job = yield Job.findByPk(id);
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
                return yield Job.findAll({ where: { contractId } });
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
}
