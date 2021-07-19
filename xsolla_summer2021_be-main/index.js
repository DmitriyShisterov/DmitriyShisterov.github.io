import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import router from "./router.js";

const PORT = process.env.PORT ?? 3000;
const DB_URL =
    "mongodb+srv://dmishisterov:9dZKuAWUUjZFKaKc@cluster0.usymf.mongodb.net/xsolla_summer2021_be?retryWrites=true&w=majority";

const app = express();

app.use(express.json());
app.use("/api", router);

async function startApp() {
    try {
        await mongoose.connect(DB_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: false,
        });
        app.listen(3000, () => {
            console.log(`server has been started on port ${PORT}...`);
        });
    } catch (error) {
        console.log(error);
    }
}

startApp();
