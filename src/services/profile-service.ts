import { Profile, ProfileCreationAttributes } from "../models/profile-model.js";

export class ProfileService {
    
    public async createProfile(firstname: string, lastname: string, profession: string, type: string): Promise<Profile> {
        try {
            const profile = await Profile.create({ firstname, lastname, profession, balance: 0, type });
            return profile;
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Unable to create profile: ${error.message}`);
            } else {
                throw new Error("An unknown error occurred.");
            }
        }
    }

    public async getBalance(profileId: number): Promise<number | null> {
        try {
            const profile = await Profile.findByPk(profileId);
            return profile ? profile.balance : null; 
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Unable to fetch balance: ${error.message}`);
            } else {
                throw new Error("An unknown error occurred.");
            }
        }
    }
}
