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
exports.ProfileController = void 0;
const profile_service_1 = require("../services/profile-service");
class ProfileController {
    constructor() {
        this.profileService = new profile_service_1.ProfileService();
    }
    createProfile(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Request body:", req.body);
            try {
                const { firstname, lastname, profession, type, balance } = req.body;
                const newProfile = yield this.profileService.createProfile(firstname, lastname, profession, type, balance);
                return res.status(201).json(newProfile);
            }
            catch (error) {
                return res.status(500).json({ message: "Failed to create profile", error });
            }
        });
    }
    getBalance(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const profileId = parseInt(req.params.id, 10);
            try {
                const balance = yield this.profileService.getBalance(profileId);
                if (balance === null) {
                    return res.status(404).json({ message: "Profile not found" });
                }
                return res.status(200).json({ balance });
            }
            catch (error) {
                return res.status(500).json({ message: "Failed to fetch balance", error });
            }
        });
    }
    updateProfile(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { firstname, lastname, profession, type, balance } = req.body;
            try {
                const updatedProfile = yield this.profileService.updateProfile(Number(id), { firstname, lastname, profession, type, balance });
                if (!updatedProfile) {
                    return res.status(404).json({ message: "Profile not found" });
                }
                return res.status(200).json(updatedProfile);
            }
            catch (error) {
                return res.status(500).json({ message: "Failed to update profile", error });
            }
        });
    }
    deleteProfile(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const success = yield this.profileService.deleteProfile(Number(id));
                if (!success) {
                    return res.status(404).json({ message: "Profile not found" });
                }
                return res.status(204).send();
            }
            catch (error) {
                return res.status(500).json({ message: "Failed to delete profile", error });
            }
        });
    }
    getAllProfile(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const profile = yield this.profileService.getAllProfile();
                return res.status(200).json(profile);
            }
            catch (error) {
                return res.status(500).json({ message: "Failed to fetch profiles", error });
            }
        });
    }
}
exports.ProfileController = ProfileController;
