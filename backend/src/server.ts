import express from "express";
import { pool } from "./db/connection.js";
import clientsRouter from "./routes/clients.route.js";

const app = express();
app.use(express.json());

const PORT = 3000;

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
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});