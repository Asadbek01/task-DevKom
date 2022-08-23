import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./users/userRoute";
dotenv.config();
const server = express();



// Middlewares
server.use(express.json());
server.use(cors());

// Routes
server.use('/users', userRouter);

export default  server ;

