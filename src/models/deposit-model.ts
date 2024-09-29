import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../shared/connection";

interface DepositAttributes {
    id: number;
    profileId: number; 
    operationDate: Date; 
    depositValue: number;
}

export interface DepositCreationAttributes extends Optional<DepositAttributes, 'id'> {}

export class Deposit extends Model<DepositAttributes, DepositCreationAttributes> {
    public id!: number;
    public profileId!: number; 
    public operationDate!: Date; 
    public depositValue!: number;
}

Deposit.init(
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
        
        operationDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        depositValue:{
            type: DataTypes.FLOAT,
            allowNull: false,
        }
    },
    {
        sequelize,
        modelName: "Deposit",
        tableName: "deposits",
        timestamps: false,
    },
);



