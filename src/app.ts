import express from "express";
import profileRoutes from "./routes/profile-route"; 
import depositRoutes from "./routes/deposit-route";
import jobRoutes from './routes/job-route';
import paymentRoutes from './routes/payment-route';
import contractRoutes from './routes/contract-route';
import sequelize from "./shared/connection"; 



const app = express();
app.use(express.json());
const PORT = 3000;

app.get("/", (req, res) => {
    res.status(200).send("Unifio Node.js API - now using ts");
});

app.use("/api/profiles", profileRoutes); 
app.use("/api/deposits", depositRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/contracts', contractRoutes);
app.use('/api/payment', paymentRoutes);



if (process.env.NODE_ENV !== 'test') {
    (async () => {
        try {
            await sequelize.authenticate();
            console.log("Database connected successfully!");

            await sequelize.sync({ force: false });
            console.log("Models synchronized with the database.");

            app.listen(PORT, () => {
                console.log("Server is running on port", PORT);
            });
        } catch (error) {
            console.error("Unable to connect to the database", error);
        }
    })();
}

export default app;
