var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Job } from "../models/job-model";
export class JobService {
    getUnpaidJobsSum() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const unpaidJobs = yield Job.findAll({ where: { paid: 0 } });
                const totalSum = unpaidJobs.reduce((totalSum, job) => totalSum + job.price, 0);
                return totalSum;
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(`Unable to calculate unpaid jobs sum: ${error.message}`);
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
}
