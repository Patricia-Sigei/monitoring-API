import { Router } from "express";
import { chaos } from "../controllers/chaos.controller.js";

const router = Router();

router.post("/", chaos);

export default router;
