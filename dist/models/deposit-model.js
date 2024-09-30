import { DataTypes, Model } from "sequelize";
import sequelize from "../shared/connection.js";
export class Deposit extends Model {
}
Deposit.init({
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
    depositValue: {
        type: DataTypes.FLOAT,
        allowNull: false,
    }
}, {
    sequelize,
    modelName: "Deposit",
    tableName: "deposits",
    timestamps: false,
});
