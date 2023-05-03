import { Router } from "express";

// Controllers
import { nuevoAnfitrion, nuevoVoluntario } from "../app/controllers/register.js";
import { loginUser, authMiddleware, logoutUser } from "../app/controllers/login.js"
import { mostrarAdmins, mostrarUsuarios } from "../utils/funciones.js";
import { mostrarVoluntariados, topAreas, topAreasAsc, topAreasDesc } from "../utils/gets.js";
import { deleteAdmin, deleteUsuario, deleteVolunt } from "../utils/delete.js";

// Prueba
import { validateToken } from "../config/database.js";

const router = Router();

//CONFIRMA SI EL TOKEN ES VALIDO
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
router.get("/api/v1/Admvoluntariados", mostrarVoluntariados);

//TRAE LOS USUARIOS Y LOS MUESTRA
router.get("/api/v1/usuarios", mostrarUsuarios);
//TRAE A LOS ADMIN Y LOS MUESTRA
router.get("/api/v1/admin", mostrarAdmins);

// TopAreas
router.get("/api/v1/topAreas", topAreas);
// TopAreasDesc
router.get("/api/v1/top/topAreasDesc", topAreasDesc);
// TopAreasAsc
router.get("/api/v1/top/topAreasAsc", topAreasAsc);


//POST
router.post("/api/v1/registerAnfitrion", nuevoAnfitrion);
router.post("/api/v1/registerVoluntario", nuevoVoluntario);
router.post("/api/v1/iniciarSesion", loginUser);
router.post("/api/v1/logout", logoutUser);

//EDIT  // ARREGLAR
router.put("/api/v1/edit/volunteer/:id");

//DELETE
router.delete("/api/v1/deletevolunt/:id", deleteVolunt);
router.delete("/api/v1/deleteusuario/:id", deleteUsuario);
router.delete("/api/v1/deleteadmin/:id", deleteAdmin);

export default router;