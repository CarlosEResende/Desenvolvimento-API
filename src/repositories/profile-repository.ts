import { Profile, ProfileCreationAttributes } from "../models/profile-model";

export class ProfileRepository {
    
    public async createProfile(data: ProfileCreationAttributes): Promise<Profile> {
        try {
            return await Profile.create(data);
        } catch (error) {
            throw new Error(`Unable to create profile: ${(error as Error).message}`);
        }
    }

    public async findAll(): Promise<Profile[]> {
        try {
            return await Profile.findAll();
        } catch (error) {
            throw new Error(`Unable to fetch profiles: ${(error as Error).message}`);
        }
    }

    public async findById(id: number): Promise<Profile | null> {
        try {
            return await Profile.findByPk(id);
        } catch (error) {
            throw new Error(`Unable to fetch profile with ID: ${(error as Error).message}`);
        }
    }

    public async updateProfile(id: number, data: Partial<ProfileCreationAttributes>): Promise<Profile | null> {
        const profile = await this.findById(id);
        if (profile) {
            return await profile.update(data);
        }
        return null;
    }

    public async deleteProfile(id: number): Promise<boolean> {
        const profile = await this.findById(id);
        if (profile) {
            await profile.destroy();
            return true;
        }
        return false;
    }

    public async getBalance(id: number): Promise<number | null> {
        const profile = await this.findById(id);
        return profile ? profile.balance : null;
    }

    public async findAllPayment(): Promise<Profile[]> {
        try {
            return await Profile.findAll();
        } catch (error) {
            throw new Error(`Unable to fetch profiles: ${(error as Error).message}`);
        }
    }
}

