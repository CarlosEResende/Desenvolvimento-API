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
exports.DepositController = void 0;
const deposit_service_1 = require("../services/deposit-service");
class DepositController {
    constructor() {
        this.depositService = new deposit_service_1.DepositService();
    }
    createDeposit(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { profileId, depositValue } = req.body;
            try {
                const deposit = yield this.depositService.createDeposit(profileId, depositValue);
                return res.status(201).json(deposit);
            }
            catch (error) {
                return res.status(500).json({ message: "Failed to create deposit", error });
            }
        });
    }
    getAllDeposits(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deposits = yield this.depositService.getAllDeposits();
                return res.status(200).json(deposits);
            }
            catch (error) {
                return res.status(500).json({ message: "Failed to fetch deposits", error });
            }
        });
    }
    getDepositById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const deposit = yield this.depositService.getDepositById(Number(id));
                if (!deposit) {
                    return res.status(404).json({ message: "Deposit not found" });
                }
                return res.status(200).json(deposit);
            }
            catch (error) {
                return res.status(500).json({ message: "Failed to fetch deposit", error });
            }
        });
    }
    updateDeposit(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { depositValue } = req.body;
            try {
                const updatedDeposit = yield this.depositService.updateDeposit(Number(id), { depositValue });
                if (!updatedDeposit) {
                    return res.status(404).json({ message: "Deposit not found" });
                }
                return res.status(200).json(updatedDeposit);
            }
            catch (error) {
                return res.status(500).json({ message: "Failed to update deposit", error });
            }
        });
    }
    deleteDeposit(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const success = yield this.depositService.deleteDeposit(Number(id));
                if (!success) {
                    return res.status(404).json({ message: "Deposit not found" });
                }
                return res.status(204).send();
            }
            catch (error) {
                return res.status(500).json({ message: "Failed to delete deposit", error });
            }
        });
    }
}
exports.DepositController = DepositController;
