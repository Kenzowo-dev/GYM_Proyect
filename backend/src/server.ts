import express from "express";

const app = express();

const PORT = 3000;

app.get("/api/health", (_req, res) => {
  res.json({
    message: "Todo esta bien en la API",
  });
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});