import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";

const app = express();

const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/api/health", (_req, res) => {
  res.json({
    message: "Todo esta bien en la API",
  });
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutandose en http://localhost:${PORT}`);
});