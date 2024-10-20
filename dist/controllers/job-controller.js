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
exports.JobController = void 0;
const job_service_1 = require("../services/job-service");
class JobController {
    constructor() {
        this.jobService = new job_service_1.JobService();
    }
    createJob(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { contractId, operationDate, paymentDate, price, paid } = req.body;
            try {
                const job = yield this.jobService.createJob(contractId, operationDate, paymentDate, price, paid);
                return res.status(201).json(job);
            }
            catch (error) {
                return res.status(500).json({ message: "Failed to create job", error });
            }
        });
    }
    getJobById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const job = yield this.jobService.getJobById(Number(id));
                if (!job) {
                    return res.status(404).json({ message: "Job not found" });
                }
                return res.status(200).json(job);
            }
            catch (error) {
                return res.status(500).json({ message: "Failed to fetch job", error });
            }
        });
    }
    updateJob(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { contractId, operationDate, paymentDate, price, paid } = req.body;
            try {
                const updatedJob = yield this.jobService.updateJob(Number(id), { contractId, operationDate, paymentDate, price, paid });
                if (!updatedJob) {
                    return res.status(404).json({ message: "Job not found" });
                }
                return res.status(200).json(updatedJob);
            }
            catch (error) {
                return res.status(500).json({ message: "Failed to update job", error: error instanceof Error ? error.message : error });
            }
        });
    }
    deleteJob(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const success = yield this.jobService.deleteJob(Number(id));
                if (!success) {
                    return res.status(404).json({ message: "Job not found" });
                }
                return res.status(204).send();
            }
            catch (error) {
                return res.status(500).json({ message: "Failed to delete job", error });
            }
        });
    }
    getJobsByContract(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { contractId } = req.params;
            if (isNaN(Number(contractId)) || Number(contractId) <= 0) {
                return res.status(400).json({ message: "Invalid contract ID" });
            }
            try {
                const jobs = yield this.jobService.getJobsByContract(Number(contractId));
                return res.status(200).json(jobs);
            }
            catch (error) {
                return res.status(500).json({ message: "An unknown error occurred.", error });
            }
        });
    }
    getUnpaidJobsTotal(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const total = yield this.jobService.getUnpaidJobsTotal();
                res.status(200).json({ total });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ message: 'Error retrieving the sum of unpaid jobs', error });
            }
        });
    }
}
exports.JobController = JobController;
