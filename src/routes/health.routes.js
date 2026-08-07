import { Router } from "express";
import { healthCheck } from "../controllers/health.controller.js";

const router = router();

router.get("/", healthCheck);

export default router;
