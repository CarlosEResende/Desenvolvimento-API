var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Contract } from "../models/contract-model";
export class ContractService {
    createContract(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Contract.create(data);
            }
            catch (error) {
                throw new Error(`Unable to create contract: ${error.message}`);
            }
        });
    }
    getContractsByProfile(profileId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Contract.findAll({ where: { profileId } });
            }
            catch (error) {
                throw new Error(`Unable to fetch contracts for profile ID ${profileId}: ${error.message}`);
            }
        });
    }
}
