export const healthCheck = (req, res) => {
  res.status(200).json({
    status: "UP",
    service: "CloudOps Monitoring API",
    timestamp: new Date(),
  });
};
