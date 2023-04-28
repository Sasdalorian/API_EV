import { Router } from "express";
import { adminShowVolunt, deleteVolunt } from "../app/controllers/AdminControllers.js";

// Controllers
import { nuevoAnfitrion, nuevoVoluntario, loginUser } from "../app/controllers/AuthControllers.js";
import { mostrarVoluntariados } from "../app/controllers/Controllers.js";
import { validateToken } from "../config/database.js";
import { mostrarAdmins, mostrarUsuarios, mostrarVoluntariadosPorArea } from "../utils/funciones.js";

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

//TRAE VOLUNTARIADOS PARA MOSTRARLOS EN LA TABLA
router.get("/api/v1/voluntariados", mostrarVoluntariados);
// MOSTRAR VOLUNTARIADOS POR AREA
router.get('/api/v1/voluntariados/areas/:idArea', mostrarVoluntariadosPorArea);
//TRAE LOS USUARIOS Y LOS MUESTRA
router.get("/api/v1/usuarios", mostrarUsuarios);
//TRAE A LOS ADMIN Y LOS MUESTRA
router.get("/api/v1/admin", mostrarAdmins);

//MUESTRA VOLUNTARIADOS PARA TABLA ADM
router.get("/api/v1/administracion", adminShowVolunt);

//POST
router.post("/api/v1/registerAnfitrion", nuevoAnfitrion);
router.post("/api/v1/registerVoluntario", nuevoVoluntario);
router.post("/api/v1/iniciarSesion", loginUser);

//DELETE
router.delete("/api/v1/deletevolunt/:id", deleteVolunt);

export default router;