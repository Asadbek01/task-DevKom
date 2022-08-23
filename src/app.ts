import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const server = express();



// Middlewares
server.use(express.json());
server.use(cors());

// Routes
// server.use('/users, usersRouter');

export { server };

