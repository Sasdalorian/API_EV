import { Router } from "express";
import { Areas } from "./models/Areas.js";
import { Voluntariados } from "./models/Voluntariados.js";


import app from "./app.js";

const indexRouter = Router();

    // Controllers
import { syncTables } from "../index.js";
import { Usuario } from "./models/Usuario.js";
import { nuevoAnfitrion, nuevoVoluntario, loginUser } from "./controllers/AuthControllers.js";


indexRouter.get("/api/v1/voluntariados", async (req, res) => {
    const resultado = await Voluntariados.findAll({
        include: {
            model: Areas,
            attributes: ["nombreArea"]
        },
        attributes: ["titulo", "ubicacion", "duracion", "quehacer", "beneficio", "cantidad", "img"]
    }).then(resultado => res.json(resultado));
});


indexRouter.post("/api/v1/registerAnfitrion", nuevoAnfitrion);
indexRouter.post("/api/v1/registerVoluntario", nuevoVoluntario);
indexRouter.post("/api/v1/iniciarSesion", loginUser);

export default indexRouter;