import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import prisma from "../db.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());


app.get("/", (_, res) => {
  res.send("Hello Take U Forward");
})

const startServer = async () => {
  try {
    // Connect to the database
    await prisma.$connect();
    console.log("Database connected successfully");

    app.listen(8000, () => {
      console.log("Server is running on http://localhost:8000");
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

startServer();
