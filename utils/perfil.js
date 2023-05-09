import { Usuario } from "../app/models/Usuario.js";
import { Rol } from "../app/models/Rol.js";
import jwt from "jsonwebtoken";

// MOSTRAR USUARIOS
export async function mostrarPerfil(req, res) {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    // Si no se proporciona un token, enviar error de "No autorizado"
    if (!token) {
      return res.status(401).json({ message: 'No se proporcionó un token de autenticación' });
    }
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRETO);
      const resultado = await Usuario.findOne({
        where: { id_usuario: decoded.id },
        include: {
          model: Rol,
          attributes: ["clase"]
        },
        attributes: ["id_usuario", "nombre", "apellidos", "email", "idrol", "pass", "img", "descripcion"]
      });
      return res.json(resultado);
    } catch (error) {
      if (error.name === 'JsonWebTokenError' && error.message === 'jwt malformed') {
        // No hacer nada en caso de error de token malformado
        return res.json({ message: 'Token inválido o malformado' });
      }
      console.log(error);
      // Manejar otros errores de forma adecuada
      return res.status(500).json({ message: 'Error interno del servidor' });
    }
  }