import express from "express";
import mongoose from "mongoose";
import  {server}  from "./app";
import listEndpoints from "express-list-endpoints";
import dotenv from "dotenv"
dotenv.config()
const port = process.env.PORT! || 3001;

// Db connection
mongoose.connect(process.env.MONGODB_CONNECTION!).then(() => {
  console.log("mongoDB Connected successfully ✅");
  server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.table(listEndpoints(server));
  });
});