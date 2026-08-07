import { Router } from "express";
import { chaos } from "../controllers/chaos.controller.js";

const router = router();

router.get("/", chaos);

export default router;
