import express from "express";
import profileRoutes from "./routes/profile-route.js"; 
import sequelize from "./shared/connection.js"; 

const app = express();
app.use(express.json());
const PORT = 3000;


app.get("/", (req, res) => {
    res.status(200).send("Unifio Node.js API - now using ts");
});

app.use("/api/profiles", profileRoutes); 

(async () => {
    try {
        
        await sequelize.query("CREATE DATABASE IF NOT EXISTS bcofionode");
        
        await sequelize.authenticate();
        console.log("DataBase connected successfully");

        await sequelize.sync({ force: false }); 
        console.log("Models synchronized with the database.");

        app.listen(PORT, () => {
            console.log("Server is running on port", PORT);
        });
    } catch (error) {
        console.error("Unable to connect to the database", error);
    }
})();

export default app;
