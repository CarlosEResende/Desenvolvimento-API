import { DataTypes, Model } from "sequelize";
import sequelize from "../shared/connection";

export class Job extends Model {
    public id!: number;
    public contractId!: number; 
    public operationDate!: Date;
    public paymentDate!: Date;
    public price!: number;
    public paid!: number;
}

Job.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        contractId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        operationDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        paymentDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        price:{
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        paid:{
            type: DataTypes.INTEGER,
            allowNull: false,
        }
        
    },
    {
        sequelize,
        modelName: "Job",
        tableName: "jobs",
        timestamps: false,
    },
);
