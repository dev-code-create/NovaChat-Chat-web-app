import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./src/lib/db.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log("Server started on port:" + PORT);
  connectDB();
});
