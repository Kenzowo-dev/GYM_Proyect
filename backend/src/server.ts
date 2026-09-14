import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import { pool } from "./db/connection.js";
import clientsRouter from "./routes/clients.route.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/api/health", async (_req, res) => {
  try {
    const result = await pool.query("SELECT NOW() AS database_time");

    res.json({
      message: "Todo esta bien",
      database: "connected",
      databaseTime: result.rows[0].database_time,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Error al conectar con PostgreSQL",
    });
  }
});

app.use("/api/clients", clientsRouter);

app.listen(PORT, () => {
  console.log(`Servidor ejecutandose en http://localhost:${PORT}`);
});