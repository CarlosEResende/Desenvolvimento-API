import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../shared/connection";


interface PaymentAttributes {
    id: number;
    jobId: number; 
    operationDate: Date;
    paymentValue: number;
    
}

export interface PaymentCreationAttributes extends Optional<PaymentAttributes, 'id'> {}

export class Payment extends Model<PaymentAttributes, PaymentCreationAttributes> 
    implements PaymentAttributes {
    public id!: number;
    public jobId!: number; 
    public operationDate!: Date;
    public paymentValue!: number;
}


Payment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        jobId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        operationDate:{
            type: DataTypes.DATE,
            allowNull: false,
        },
        paymentValue: {
            type: DataTypes.FLOAT,
            allowNull: false,
        }
        
    },
    {
        sequelize,
        modelName: "Payment",
        tableName: "payments",
        timestamps: false,
    },
);


