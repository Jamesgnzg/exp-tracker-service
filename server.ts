import { Sequelize } from "sequelize";
import { config } from "dotenv";

config();
const { DATABASE_USER, DATABASE_HOST, DATABASE_NAME, DATABASE_PASSWORD } =
  process.env;

const dbUser = DATABASE_USER as string;
const dbName = DATABASE_NAME as string;
const dbHost = DATABASE_HOST as string;
const dbPassword = DATABASE_PASSWORD as string;

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: "postgres",
});

export default sequelize;
