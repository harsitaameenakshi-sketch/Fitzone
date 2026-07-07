import express from "express";
import { bookTrial } from "../controllers/trialcontroller.js";

const router = express.Router();

router.post("/", bookTrial);

export default router;