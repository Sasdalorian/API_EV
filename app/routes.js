import { Router } from "express";
import { Areas } from "./models/Areas.js";
import { Voluntariados } from "./models/Voluntariados.js";


import app from "./app.js";

const router = Router();

    // Controllers
import { nuevoAnfitrion, nuevoVoluntario, loginUser } from "./controllers/AuthControllers.js";
import { mostrarVoluntariados } from "./controllers/Controllers.js";


router.get("/api/v1/voluntariados", mostrarVoluntariados);
router.post("/api/v1/registerAnfitrion", nuevoAnfitrion);
router.post("/api/v1/registerVoluntario", nuevoVoluntario);
router.post("/api/v1/iniciarSesion", loginUser);

export default router;