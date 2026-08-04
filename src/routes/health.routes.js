import { healthCheck } from "../controllers/health.controller.js";

router.get("/", healthCheck);

export default router;
