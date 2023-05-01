const app = express();


//Import
import express from "express";
import bodyParser from "body-parser";
import router from "../routes/routes.js";

    //Middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(router);

export default app;