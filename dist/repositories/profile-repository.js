var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Profile } from "../models/profile-model";
export class ProfileRepository {
    createProfile(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Profile.create(data);
            }
            catch (error) {
                throw new Error(`Unable to create profile: ${error.message}`);
            }
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Profile.findAll();
            }
            catch (error) {
                throw new Error(`Unable to fetch profiles: ${error.message}`);
            }
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Profile.findByPk(id);
            }
            catch (error) {
                throw new Error(`Unable to fetch profile with ID: ${error.message}`);
            }
        });
    }
    updateProfile(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const profile = yield this.findById(id);
            if (profile) {
                return yield profile.update(data);
            }
            return null;
        });
    }
    deleteProfile(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const profile = yield this.findById(id);
            if (profile) {
                yield profile.destroy();
                return true;
            }
            return false;
        });
    }
    getBalance(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const profile = yield this.findById(id);
            return profile ? profile.balance : null;
        });
    }
}
