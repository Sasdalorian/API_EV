import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// IMPORT MODELS
import { Usuario } from "../models/Usuario.js";

// LOGIN
export const loginUser = async (req, res) => {
  try {
    const { email, pass } = req.body;
    const usuario = await Usuario.findOne({
      where: {
        email: email,
          },
    });
    if (!usuario) {
    return res.status(404).json({ msg: "Email o Contraseña Incorrecta." });
    }
      if (bcrypt.compareSync(pass, usuario.pass)) {
        console.log("Login Exitoso");
        const token = jwt.sign({ email: email }, process.env.JWT_SECRETO);
        console.log(token);
        
        if (usuario) {
          const newToken = jwt.sign({ usuario: email, clave: pass }, process.env.JWT_SECRETO, {
            expiresIn: process.env.JWT_TIEMPO_EXPIRA
          });

          const decodedToken = jwt.verify(newToken, process.env.JWT_SECRETO);
          console.log(decodedToken);
            
          res.json([{ estado: true, token: newToken }]);
        } else {
          res.json([{ estado: false, token: "" }]);
        }
      } else {
        console.log("Contraseña Incorrecta");
        return res.status(401).json({ msg: "Email o Contraseña Incorrecta." });
      }
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};