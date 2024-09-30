import { DataTypes, Model } from "sequelize";
import sequelize from "../shared/connection";
export class Payment extends Model {
}
Payment.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    jobId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    operationDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    paymentValue: {
        type: DataTypes.FLOAT,
        allowNull: false,
    }
}, {
    sequelize,
    modelName: "Payment",
    tableName: "payments",
    timestamps: false,
});
