import { Sequelize, DataTypes, Model } from "sequelize";

const sequelize = new Sequelize({
    dialect: "mysql",
    database: "bcofionode",
    username: "root",
    password: "Database123c",
    host: "localhost",
    port: 3306
});

export default sequelize;