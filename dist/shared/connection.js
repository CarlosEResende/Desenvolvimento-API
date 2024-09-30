import { Sequelize } from "sequelize";
const sequelize = new Sequelize({
    dialect: "mysql",
    database: "bcofionode",
    username: "root",
    password: "Database123c",
    host: "localhost",
    port: 3307
});
export default sequelize;
