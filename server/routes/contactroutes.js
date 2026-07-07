import express from "express";
import { submitContact } from "../controllers/contactcontroller.js";

const router = express.Router();

router.post("/", submitContact);

export default router;