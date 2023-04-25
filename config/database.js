import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

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

export function validateToken(token) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, process.env.JWT_SECRETO, (err, data) => {
        if (err) {
          resolve({ estado: false, msg: "Token inválido" });
        } else {
          resolve({ estado: true, msg: "Token válido" });
        }
      });
    });
  }