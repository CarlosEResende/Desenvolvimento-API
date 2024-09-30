import { Request, Response } from "express";
import { ProfileService } from "../services/profile-service.js";

export class ProfileController {
    private profileService: ProfileService;

    constructor() {
        this.profileService = new ProfileService(); 
    }

    public async createProfile(req: Request, res: Response): Promise<Response> {
        console.log("Request body:", req.body);
        try {
            const { firstname, lastname, profession, type } = req.body; 
            const newProfile = await this.profileService.createProfile(firstname, lastname, profession, type);
            return res.status(201).json(newProfile);
        } catch (error) {
            return res.status(500).json({ message: "Failed to create profile", error});
        }
    }

    public async getBalance(req: Request, res: Response): Promise<Response> {
        const profileId = parseInt(req.params.id, 10); 
        try {
            const balance = await this.profileService.getBalance(profileId);
            if (balance === null) {
                return res.status(404).json({ message: "Profile not found" });
            }
            return res.status(200).json({ balance });
        } catch (error) {
            return res.status(500).json({ message: "Failed to fetch balance", error });
        }
    }

    public async updateProfile(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const {  firstname, lastname, profession, type} = req.body; 

        try {
            const updatedProfile = await this.profileService.updateProfile(Number(id), {  firstname, lastname, profession, type });
            if (!updatedProfile) {
                return res.status(404).json({ message: "Profile not found" });
            }
            return res.status(200).json(updatedProfile);
        } catch (error) {
            return res.status(500).json({ message: "Failed to update profile", error });
        }
    }

    public async deleteProfile(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        try {
            const success = await this.profileService.deleteProfile(Number(id));
            if (!success) {
                return res.status(404).json({ message: "Profile not found" });
            }
            return res.status(204).send(); 
        } catch (error) {
            return res.status(500).json({ message: "Failed to delete profile", error });
        }
    }
}
