import express from "express";

import healthRoutes from "./src/routes/health.routes.js";
import metricsRoutes from "./src/routes/metrics.routes.js";
import chaosRoutes from "./src/routes/chaos.routes.js";

import { metricsMiddleware } from "./src/middleware/metrics.middleware.js";

const app = express();

app.use(metricsMiddleware);

app.get("/", (req, res) => {
  res.json({ message: "monitoring project is running 🚀" });
});

app.use("/health", healthRoutes);
app.use("/metrics", metricsRoutes);
app.use("/chaos", chaosRoutes);

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

export default app;
