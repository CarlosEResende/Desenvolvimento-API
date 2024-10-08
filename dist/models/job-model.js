import { DataTypes, Model } from "sequelize";
import sequelize from "../shared/connection.js";
export class Job extends Model {
}
Job.init({
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
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    paid: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    }
}, {
    sequelize,
    modelName: "Job",
    tableName: "jobs",
    timestamps: false,
});
