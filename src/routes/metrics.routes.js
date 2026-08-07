import { Router } from "express";
import { metrics } from "../controllers/metrics.controller.js";

const router = Router();

router.get("/", metrics);

export default router;
