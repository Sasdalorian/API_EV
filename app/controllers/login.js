import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// IMPORT MODELS
import { Usuario } from "../models/Usuario.js";

// LOGIN
export const loginUser = async (req, res) => {
  try {
    // Rescatamos email y pass ingresada por el Usuario
    const { email, pass } = req.body;
    // Buscamos un Usuario que contenga el mismo email ingresado por el Usuario
    const usuario = await Usuario.findOne({
      where: {
        email: email,
      },
    });
    // Si Usuario no es encontrado se envia el siguiente mensaje
    if (!usuario) {
      return res.status(401).json({ msg: 'Email o Contraseña Incorrecta.' });
    }
    // Si se encuentra el Usuario se comparara la contraseña ingresada por el Usuario con la contraseña encriptada en la DataBase
    if (bcrypt.compareSync(pass, usuario.pass)) {
      // Si logra ingresarse correctamente, se crea un Token para el id y email con un secreto de JWT
      const newToken = jwt.sign({ id: usuario.id, email: usuario.email }, process.env.JWT_SECRETO, {
        expiresIn: process.env.JWT_TIEMPO_EXPIRA,
      });
      res.json({ token: newToken });
    } else {
      return res.status(401).json({ msg: 'Email o Contraseña Incorrecta.' });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: 'Ha ocurrido un error al intentar ingresar. Por favor, inténtelo de nuevo más tarde.' });
  }
};

// crear el middleware de autenticación
export const authMiddleware = async (req, res, next) => {
  // Obtener token de autenticación del encabezado
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  // Si no se proporciona un token, enviar error de "No autorizado"
  if (!token) {
    return res.status(401).json({ message: 'No se proporcionó un token de autenticación' });
  }

  try {
    // Verificar token utilizando la clave secreta
    const decoded = jwt.verify(token, process.env.JWT_SECRETO);
    req.user = decoded;
    next();
  } catch (error) {
    // Si el token no es válido, enviar error de "No autorizado"
    res.status(401).json({ message: 'Token inválido' });
  }
}


//CerrarSesion
export const logoutUser = async (req, res) => {
  try {
    res.json({ token: null }); // Envía una respuesta con el token de autenticación a null para borrarlo
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: 'Ha ocurrido un error al intentar cerrar sesión. Por favor, inténtelo de nuevo más tarde.' });
  }
};