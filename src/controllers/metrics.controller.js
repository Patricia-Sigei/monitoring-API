import { register } from "../config/metrics.js";

export const metrics = async (req, res) => {
  res.set("Content-Type", register.contentType);

  res.end(await register.metrics());
};
