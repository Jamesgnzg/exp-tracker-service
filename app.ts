import { config } from "dotenv";
import pool from "./server";
import { Request, Response } from "express";

config();
const express = require("express");
const app = express();

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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
