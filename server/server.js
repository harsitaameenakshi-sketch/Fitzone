import express from "express";
import cors from "cors";
import dotenv from "dotenv";


import connectDB from "./config/db.js";
import contactRoutes from "./routes/contactroutes.js";
import trialRoutes from "./routes/trialRoutes.js";
import memberRoutes from "./routes/memberRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to FitZone Backend 🚀");
});

app.use("/api/contact", contactRoutes);
app.use("/api/trial", trialRoutes);
app.use("/api/member", memberRoutes);
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});