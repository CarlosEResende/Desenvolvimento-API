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
exports.ProfileService = void 0;
const profile_model_1 = require("../models/profile-model");
class ProfileService {
    createProfile(firstname, lastname, profession, type, balance) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const profile = yield profile_model_1.Profile.create({ firstname, lastname, profession, balance, type });
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
                const profile = yield profile_model_1.Profile.findByPk(profileId);
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
    updateProfile(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const profile = yield profile_model_1.Profile.findByPk(id);
                if (!profile) {
                    return null;
                }
                yield profile.update(data);
                return profile;
            }
            catch (error) {
                throw new Error(`Unable to update profile with ID ${id}: ${error.message}`);
            }
        });
    }
    deleteProfile(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const profile = yield profile_model_1.Profile.findByPk(id);
                if (!profile) {
                    return false;
                }
                yield profile.destroy();
                return true;
            }
            catch (error) {
                throw new Error(`Unable to delete profile with ID ${id}: ${error.message}`);
            }
        });
    }
    getAllProfile() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield profile_model_1.Profile.findAll();
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(`Unable to fetch profile: ${error.message}`);
                }
                else {
                    throw new Error("An unknown error occurred.");
                }
            }
        });
    }
}
exports.ProfileService = ProfileService;
