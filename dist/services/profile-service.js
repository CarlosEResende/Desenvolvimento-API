var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Profile } from "../models/profile-model.js";
export class ProfileService {
    createProfile(firstname, lastname, profession, type) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const profile = yield Profile.create({ firstname, lastname, profession, balance: 0, type });
                return profile;
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(`Unable to create profile: ${error.message}`);
                }
                else {
                    throw new Error("An unknown error occurred.");
                }
            }
        });
    }
    getBalance(profileId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const profile = yield Profile.findByPk(profileId);
                return profile ? profile.balance : null;
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(`Unable to fetch balance: ${error.message}`);
                }
                else {
                    throw new Error("An unknown error occurred.");
                }
            }
        });
    }
}
