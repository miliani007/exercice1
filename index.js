import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors"

const app = express();
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database connected ...");
    } catch (error) {
        throw error;
    }
}

app.use(cors());
app.use(express.json());

app.listen(process.env.PORT, ()=>{
    connect();
    console.log('Server Connected ...');
})
