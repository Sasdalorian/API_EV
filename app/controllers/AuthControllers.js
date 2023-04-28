import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// IMPORT MODELS
import { Usuario } from "../models/Usuario.js";

    // SIGN UP

// AGREGAR VOLUNTARIADO
export const nuevoVoluntario = async (req, res) => {
    try {
        const {nombre, apellidos, email, passE} = req.body;
        const idRol = 2;
        console.log(nombre, apellidos, email, passE);
        //console.log(nombre, apellidos, email, pass, idRol);
        const resultado = await Usuario.create({
            nombre: nombre,
            apellidos: apellidos,
            email: email,
            pass: passE,
            idrol: idRol
        });
        //FUTURO TOKEN
        res.json(resultado);
    } catch (error) {
        return res.status(500).json(error);
    }
}
// AGREGAR Anfitrion
export const nuevoAnfitrion = async (req, res) => {
    try {
        const {nombre, apellidos, email, passE} = req.body;
        const idRol = 3;
        console.log(nombre, apellidos, email, passE);
        const resultado = await Usuario.create({
            nombre: nombre,
            apellidos: apellidos,
            email: email,
            pass: passE,
            idrol: idRol
        });
        console.log("usuario creado?")
        res.json(resultado);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

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
          return res.status(404).json({ msg: "Email no encontrado." });
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
          return res.status(401).json({ msg: "Contraseña Incorrecta" });
        }
      } catch (error) {
        console.log(error);
        return res.status(500).json(error);
      }
    };