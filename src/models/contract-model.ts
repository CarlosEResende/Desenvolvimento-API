import { DataTypes, Model } from "sequelize";
import sequelize from "../shared/connection";

export class Contract extends Model {
    public id!: number;
    public profileId!: number; 
    public terms!: string;
    public operationDate!: Date;
    public status!: string;
}

Contract.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        profileId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        terms: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        operationDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "Contract",
        tableName: "contracts",
        timestamps: false,
    },
);
