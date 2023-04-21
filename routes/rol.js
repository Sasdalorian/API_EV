import { Router } from "express";
import { Usuario } from "../database/models/Usuario.js";
import { Rol } from "../database/models/Rol.js";

const rolRouter = Router();

rolRouter.get("/",(req, res) => {
    Rol.findAll({
        include: {
            model: Usuario,
            attributes: ["nombre", "apellidos"]
        },
        attributes: ["clase", "idrol"]
    }).then(Usuario => res.json(Usuario));
})

export default rolRouter;

