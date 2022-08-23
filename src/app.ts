import express, { ErrorRequestHandler } from "express";
import cors from "cors";
import userRouter from "./users/userRoute";
import {
    badRequestHandler,
    forbiddenError,
    genericErrorHandler,
    notFoundHandler,
    unauthorizedError
} from "./middlewares";

import dotenv from "dotenv";
dotenv.config();
const server = express();


// Middlewares
server.use(express.json());
server.use(cors());

server.use(badRequestHandler);
server.use(forbiddenError);
server.use(notFoundHandler);
server.use(unauthorizedError);
server.use(genericErrorHandler);


// Routes
server.use('/users', userRouter);

export { server };


