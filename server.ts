import { Pool } from "pg";

const {
  DATABASE_USER,
  DATABASE_HOST,
  DATABASE_NAME,
  DATABSE_PASSWORD,
  DATABASE_PORT,
} = process.env;

const pool = new Pool({
  user: DATABASE_USER,
  host: DATABASE_HOST,
  database: DATABASE_NAME,
  password: DATABSE_PASSWORD,
  port: parseInt(DATABASE_PORT || "5432", 10),
});

export default pool;
