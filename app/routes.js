import { Router } from "express";
import { adminShowVolunt, deleteVolunt } from "./controllers/AdminControllers.js";

// Controllers
import { nuevoAnfitrion, nuevoVoluntario, loginUser } from "./controllers/AuthControllers.js";
import { mostrarUsuarios, mostrarVoluntariados } from "./controllers/Controllers.js";
import { validateToken } from "../config/database.js";

const router = Router();

router.get("/token/:token", async (req, res) => {
    const { token } = req.params;
    try {
      const resultado = await validateToken(token);
      res.json(resultado);
    } catch (error) {
      res.status(500).json({ estado: false, msg: "Error al validar el token" });
    }
  });

//GET
router.get("/api/v1/voluntariados", mostrarVoluntariados);
router.get("/api/v1/usuarios", mostrarUsuarios);
router.get("/api/v1/administracion", adminShowVolunt);

//POST
router.post("/api/v1/registerAnfitrion", nuevoAnfitrion);
router.post("/api/v1/registerVoluntario", nuevoVoluntario);
router.post("/api/v1/iniciarSesion", loginUser);

//DELETE
router.delete("/api/v1/deletevolunt/:id", deleteVolunt);

export default router;