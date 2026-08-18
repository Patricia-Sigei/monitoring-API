import { httpRequestsTotal, httpRequestDuration } from "../config/metrics.js";

export const metricsMiddleware = (req, res, next) => {
  const start = process.hrtime();

  res.on("finish", () => {
    const duration = process.hrtime(start);

    const durationInSeconds = duration[0] + duration[1] / 1e9;

    const route = req.route?.path || req.path;

    httpRequestsTotal.inc({
      method: req.method,
      route,
      status_code: res.statusCode,
    });

    httpRequestDuration.observe(
      {
        method: req.method,
        route,
        status_code: res.statusCode,
      },
      durationInSeconds,
    );
  });

  next();
};
