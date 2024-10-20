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
exports.ContractService = void 0;
const contract_model_1 = require("../models/contract-model");
class ContractService {
    createContract(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield contract_model_1.Contract.create(data);
            }
            catch (error) {
                throw new Error(`Unable to create contract: ${error.message}`);
            }
        });
    }
    getAllContracts() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield contract_model_1.Contract.findAll();
            }
            catch (error) {
                throw new Error(`Unable to fetch contracts: ${error.message}`);
            }
        });
    }
    getContractsByProfile(profileId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield contract_model_1.Contract.findAll({ where: { profileId } });
            }
            catch (error) {
                throw new Error(`Unable to fetch contracts for profile ID ${profileId}: ${error.message}`);
            }
        });
    }
    updateContract(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const contract = yield this.findById(id);
                if (contract) {
                    return yield contract.update(data);
                }
                return null;
            }
            catch (error) {
                throw new Error(`Unable to update contract: ${error.message}`);
            }
        });
    }
    deleteContract(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const contract = yield this.findById(id);
                if (contract) {
                    yield contract.destroy();
                    return true;
                }
                return false;
            }
            catch (error) {
                throw new Error(`Unable to delete contract: ${error.message}`);
            }
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield contract_model_1.Contract.findByPk(id);
            }
            catch (error) {
                throw new Error(`Unable to find contract with ID: ${error.message}`);
            }
        });
    }
}
exports.ContractService = ContractService;
