import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();

app.use(cors);

dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected to mongodb")
}).catch((error)=>{
    console.log(error)
})

app.listen(3000, ()=>{
    console.log("App is listening on Port 3000")
})