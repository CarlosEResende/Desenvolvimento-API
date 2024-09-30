var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ProfileService } from "../services/profile-service";
export class ProfileController {
    constructor() {
        this.profileService = new ProfileService();
    }
    createProfile(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { firstname, lastname, profession, type } = req.body;
                const newProfile = yield this.profileService.createProfile(firstname, lastname, profession, type);
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
}
