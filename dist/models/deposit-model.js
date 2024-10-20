"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deposit = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../shared/connection"));
class Deposit extends sequelize_1.Model {
}
exports.Deposit = Deposit;
Deposit.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    profileId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    operationDate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    depositValue: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    }
}, {
    sequelize: connection_1.default,
    modelName: "Deposit",
    tableName: "deposits",
    timestamps: false,
});
