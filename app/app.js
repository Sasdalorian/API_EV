import express from "express";
import indexRouter from "./routes.js";

const app = express();

    //Middlewares
app.use(express.json());
app.use(indexRouter);

export default app;