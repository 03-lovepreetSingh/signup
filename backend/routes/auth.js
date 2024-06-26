import express from "express";
import { signin, signup } from "../controllers/auth.js";
const router = express.Router();

// SIGN UP
router.post("/signup", signup);

// SIGN IN
router.post("/signin", signin);

export default router;
