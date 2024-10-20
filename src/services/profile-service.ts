import { Profile, ProfileCreationAttributes } from "../models/profile-model";

export class ProfileService {
    
    public async createProfile(firstname: string, lastname: string, profession: string, type: string, balance: number): Promise<Profile> {
        try {
            const profile = await Profile.create({ firstname, lastname, profession, balance, type });
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

    public async updateProfile(id: number, data: Partial<ProfileCreationAttributes>): Promise<Profile | null> {
        try {
            const profile = await Profile.findByPk(id);
            if (!profile) {
                return null; 
            }
    
            await profile.update(data); 
            return profile; 
        } catch (error) {
            throw new Error(`Unable to update profile with ID ${id}: ${(error as Error).message}`);
        }
    }

    public async deleteProfile(id: number): Promise<boolean> {
        try {
            const profile = await Profile.findByPk(id); 
            if (!profile) {
                return false;
            }
    
            await profile.destroy(); 
            return true; 
        } catch (error) {
            throw new Error(`Unable to delete profile with ID ${id}: ${(error as Error).message}`);
        }
    }

    public async getAllProfile(): Promise<Profile[]> {
        try {
            return await Profile.findAll();
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Unable to fetch profile: ${error.message}`);
            } else {
                throw new Error("An unknown error occurred.");
            }
        }
    }
}
