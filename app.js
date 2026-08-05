const express = require("express");

import healthRoutes from "./routes/health.routes.js";
import metricsRoutes from "./routes/metrics.routes.js";
import chaosRoutes from "./routes/chaos.routes.js";

const app = express();
const router = express.Router();

app.get("/", (req, res) => {
  res.json({ message: "monitoring project is running 🚀" });
});

app.use("/health", healthRoutes);
app.use("/metrics", metricsRoutes);
app.use("/chaos", chaosRoutes);

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

module.exports = app;
