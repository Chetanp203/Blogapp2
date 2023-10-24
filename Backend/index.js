import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"))





mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Connected to MongoDB")
}).catch((error)=>{
    console.log("Error while connecting to MongDB",error)
})

app.listen(8000,()=>{
    console.log("Listening from sever 8000")
})