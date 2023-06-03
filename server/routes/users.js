import express from "express";

// Route handlers
import { signin, signup } from "../controllers/users.js";

const router = express.Router();

router.post("/signin", signin);
router.post("/signin", signup);

export default router;
