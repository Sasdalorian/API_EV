import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

export const sequelize = new Sequelize (
    process.env.DATABASE_NAME,
    process.env.USER_DB,
    process.env.PASS_DB,
    {
        host:process.env.HOST_DB,
        dialect:'postgres'
    }
);