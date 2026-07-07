import express from "express";
import { registerMember } from "../controllers/membercontroller.js";

const router = express.Router();

router.post("/", registerMember);

export default router;