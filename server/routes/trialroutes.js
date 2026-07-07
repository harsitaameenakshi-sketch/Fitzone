import express from "express";
import { bookTrial } from "../controllers/trialController.js";

const router = express.Router();

router.post("/", bookTrial);

export default router;