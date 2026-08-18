export const chaos = async (req, res) => {
  const { type } = req.body;

  if (!type) {
    return res.status(400).json({
      error: "Chaos type is required",
    });
  }

  if (type === "LATENCY") {
    await new Promise((resolve) => setTimeout(resolve, 5000));

    return res.json({
      message: "Latency simulation completed",
    });
  }

  if (type === "ERROR") {
    return res.status(500).json({
      error: "Simulated application failure",
    });
  }

  if (type === "CPU") {
    const start = Date.now();

    while (Date.now() - start < 5000) {
      Math.sqrt(Math.random());
    }

    return res.json({
      message: "CPU simulation completed",
    });
  }

  return res.status(400).json({
    error: "Unknown chaos type",
  });
};
