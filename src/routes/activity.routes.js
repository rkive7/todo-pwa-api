// routes/activity.routes.js
import { Router } from "express";
import { getHistory } from "../controllers/activity.controller.js";
import { auth } from "../middleware/auth.js";

const router = Router();

router.get("/", auth, getHistory);

export default router;