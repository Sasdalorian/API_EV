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
        Usuario.findOne({
          where: {
            email: email,
          },
        }).then((Usuario) => {
          if (!Usuario) {
            res.status(404).json({ msg: "Email no encontrado." });
            console.log("Email no encontrado.");
          } else {
            if (bcrypt.compareSync(pass, Usuario.pass)) {
              console.log("Login Exitoso");
              const token = jwt.sign({ email: email }, "secretkey");
              res.json({ token });
            } else {
              console.log("Contraseña Incorrecta");
              res.status(401).json({ msg: "Contraseña Incorrecta" });
            }
          }
        });
      } catch (error) {
        return res.status(500).json(error);
      }
};
