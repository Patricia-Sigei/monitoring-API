import { Router } from "express";
import { chaos } from "../controllers/chaos.controller.js";

const router = Router();

router.get("/", chaos);

export default router;
