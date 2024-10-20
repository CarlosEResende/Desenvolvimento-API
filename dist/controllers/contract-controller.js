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
exports.ContractController = void 0;
const contract_service_1 = require("../services/contract-service");
class ContractController {
    constructor() {
        this.contractService = new contract_service_1.ContractService();
    }
    createContract(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { profileId, terms, operationDate, status } = req.body;
            try {
                const contract = yield this.contractService.createContract({ profileId, terms, operationDate, status });
                return res.status(201).json(contract);
            }
            catch (error) {
                return res.status(500).json({ message: "Failed to create contract" });
            }
        });
    }
    getAllContracts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const contracts = yield this.contractService.getAllContracts();
                return res.status(200).json(contracts);
            }
            catch (error) {
                return res.status(500).json({ message: "Failed to fetch contracts" });
            }
        });
    }
    getContractByProfile(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const contracts = yield this.contractService.getContractsByProfile(Number(id));
                if (!contracts || contracts.length === 0) {
                    return res.status(404).json({ message: "No contracts found for this profile" });
                }
                return res.status(200).json(contracts);
            }
            catch (error) {
                return res.status(500).json({ message: "Failed to fetch contracts" });
            }
        });
    }
    updateContract(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { terms, operationDate, status } = req.body;
            try {
                const updatedContract = yield this.contractService.updateContract(Number(id), { terms, operationDate, status });
                if (!updatedContract) {
                    return res.status(404).json({ message: "Contract not found" });
                }
                return res.status(200).json(updatedContract);
            }
            catch (error) {
                return res.status(500).json({ message: "Failed to update contract" });
            }
        });
    }
    deleteContract(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const success = yield this.contractService.deleteContract(Number(id));
                if (!success) {
                    return res.status(404).json({ message: "Contract not found" });
                }
                return res.status(204).send();
            }
            catch (error) {
                return res.status(500).json({ message: "Failed to delete contract" });
            }
        });
    }
}
exports.ContractController = ContractController;
