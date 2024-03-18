import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());


app.get("/", (_, res) => {
  res.send("Hello Take U Forward");
})

app.listen(8000);
