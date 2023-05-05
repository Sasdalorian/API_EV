import { Usuario } from "../app/models/Usuario.js";
import { Rol } from "../app/models/Rol.js";
import jwt from "jsonwebtoken";

// MOSTRAR USUARIOS
export async function mostrarPerfil(req, res) {
    const authHeader = req.headers.authorization;
    console.log(authHeader)
    const token = authHeader && authHeader.split(' ')[1];
    console.log(token)
    // Si no se proporciona un token, enviar error de "No autorizado"
    if (!token) {
        return res.status(401).json({ message: 'No se proporcionó un token de autenticación' });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRETO);
    try {
        const resultado = await Usuario.findOne({
            where: {id_usuario: decoded.id},
            include: {
                model: Rol,
                attributes: ["clase"]},
            attributes: ["nombre", "apellidos", "email", "idrol", "pass", "img"]
        })
        console.log(resultado); // Agregar este console.log para verificar la respuesta
        return res.json(resultado);
    } catch (error) {
        console.log(error)
    }
};