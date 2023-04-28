const app = express();


//Import
import express from "express";
import router from "../routes/routes.js";

    //Middlewares
app.use(express.json());
app.use(router);

export default app;