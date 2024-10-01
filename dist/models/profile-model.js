import { DataTypes, Model } from "sequelize";
import sequelize from "../shared/connection.js";
export class Profile extends Model {
}
Profile.init({
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
        allowNull: false,
        validate: {
            min: 0,
        },
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: "Profile",
    tableName: "profiles",
    timestamps: false,
});
