import { config } from "dotenv";
import express from "express";
import sequelize from "./server";

config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // For parsing JSON request bodies

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
