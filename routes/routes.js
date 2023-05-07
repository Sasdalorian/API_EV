import { Router } from "express";

// Controllers
import { nuevoAnfitrion, nuevoVoluntario } from "../app/controllers/register.js";
import { loginUser, logoutUser } from "../app/controllers/login.js"
import { mostrarAdmins, mostrarUsuarios, mostrarVoluntariados } from "../utils/funciones.js";
import { topAreas, topAreasAsc, topAreasDesc } from "../utils/topAreas.js";
import { deleteAdmin, deleteUsuario, deleteVolunt } from "../utils/delete.js";

// Prueba
import { mostrarPerfil } from "../utils/perfil.js";
import { nuevoAdmin, nuevoUsuario, nuevoVoluntariado } from "../utils/post.js";
import { editAdmin, editUser, editarVolunt } from "../utils/put.js";

const router = Router();

// -------------------- VOLUNTARIADOS -------------------- //
// TRAE VOLUNTARIADOS PARA MOSTRARLOS EN LA TABLA
router.get("/api/v1/voluntariados", mostrarVoluntariados);


// -------------------- PERFIL -------------------- //
// INFO PERFIL
router.get("/api/v1/perfil", mostrarPerfil);


// -------------------- ADMIN -------------------- //
// TABLA VOLUNTARIOS
router.get("/api/v1/Admvoluntariados", mostrarVoluntariados);
// TABLA USUARIOS
router.get("/api/v1/usuarios", mostrarUsuarios);
// TABLA ADMIN
router.get("/api/v1/admin", mostrarAdmins);

// ----- ADD TABLAS ----- //
// AGREGAR VOLUNTARIADO
router.post("/api/v1/addvolunt", nuevoVoluntariado);
// AGREGAR USUARIO
router.post("/api/v1/addusuario", nuevoUsuario);
// AGREGAR ADMIN
router.post("/api/v1/addadmin", nuevoAdmin);

// ----- PUT TABLAS ----- //
// EDITAR VOLUNTARIADO
router.put("/api/v1/editvolunt", editarVolunt);
// EDITAR USUARIOS
router.put("/api/v1/editusuario", editUser);
// EDITAR ADMIN
router.put("/api/v1/editadmin", editAdmin);

// ----- DELETE TABLAS ----- //
// ELIMINAR VOLUNTARIADO
router.delete("/api/v1/deletevolunt/:id", deleteVolunt);
// ELIMINAR USUARIO
router.delete("/api/v1/deleteusuario/:id", deleteUsuario);
// ELIMINAR ADMIN
router.delete("/api/v1/deleteadmin/:id", deleteAdmin);

// ----- ESTADISTICAS ----- //
// TopAreas
router.get("/api/v1/topAreas", topAreas);
// TopAreasDesc
router.get("/api/v1/top/topAreasDesc", topAreasDesc);
// TopAreasAsc
router.get("/api/v1/top/topAreasAsc", topAreasAsc);


// -------------------- REGISTRAR -------------------- //
// REGISTRAR VOLUNTARIADO
router.post("/api/v1/registerVoluntario", nuevoVoluntario);
// REGISTRAR ANFITRION
router.post("/api/v1/registerAnfitrion", nuevoAnfitrion);


// -------------------- LOGIN & LOGOUT -------------------- //
// INICIAR SESION
router.post("/api/v1/iniciarSesion", loginUser);
// CERRAR SESION
router.post("/api/v1/logout", logoutUser);





// EDIT  // ARREGLAR
router.put("/api/v1/edit/volunteer/:id");

export default router;