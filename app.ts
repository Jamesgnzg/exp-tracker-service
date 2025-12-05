import { config } from "dotenv";
import express, { Request, Response } from "express";
import pool from "./server";

config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // For parsing JSON request bodies

app.get("/users", async (req: Request, res: Response) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
