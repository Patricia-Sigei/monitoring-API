import { metrics } from "../controllers/metrics.controller.js";

router.get("/", metrics);

export default router;
