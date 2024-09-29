import { DataTypes, Model } from "sequelize";
import sequelize from "../shared/connection";

export class Profile extends Model {
    public id!: number;
    public firstname!: string; 
    public lastname!: string;
    public profession!: string;
    public balance!: number;

}

Profile.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        firstname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        profession: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        balance: {
            type: DataTypes.FLOAT,
            defaultValue: 0,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "Profile",
        tableName: "profiles",
        timestamps: false,
    },
);
