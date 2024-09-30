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
export class JobRepository {
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Job.create(data);
            }
            catch (error) {
                throw new Error(`Unable to create job: ${error.message}`);
            }
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Job.findAll();
            }
            catch (error) {
                throw new Error(`Unable to fetch jobs: ${error.message}`);
            }
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Job.findByPk(id);
            }
            catch (error) {
                throw new Error(`Unable to fetch job with ID: ${error.message}`);
            }
        });
    }
    updateJob(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const job = yield this.findById(id);
            if (job) {
                return yield job.update(data);
            }
            return null;
        });
    }
    deleteJob(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const job = yield this.findById(id);
            if (job) {
                yield job.destroy();
                return true;
            }
            return false;
        });
    }
}
