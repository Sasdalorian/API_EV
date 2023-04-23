import bcrypt from "bcrypt";

// IMPORT MODELS
import { Usuario } from "../models/Usuario.js";

    // SIGN UP
// AGREGAR Anfitrion
export const nuevoAnfitrion = async (req, res) => {
    try {
        const {nombre, apellidos, email, pass} = req.body;
        const idRol = 3;
        const resultado = await Usuario.create({
            nombre: nombre,
            apellidos: apellidos,
            email: email,
            pass: pass,
            idrol: idRol
        });
        res.json(resultado);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
    res.json("Success");
}
// AGREGAR VOLUNTARIADO
export const nuevoVoluntario = async (req, res) => {
    try {
        const {nombre, apellidos, email, pass} = req.body;
        const idRol = 2;
        const resultado = await Usuario.create({
            nombre: nombre,
            apellidos: apellidos,
            email: email,
            pass: pass,
            idrol: idRol
        })
        res.json(resultado);
    } catch (error) {
        return res.status(500).json(error);
    }
    res.json("Success");
}

    // LOGIN
export const loginUser = async (req, res) => {
    try {
        const {email, pass} = req.body;
        Usuario.findOne({
            where: {
                email: email
            }
        }).then(Usuario => {
            if(!Usuario) {
                res.status(404).json({ msg: "Email no encontrado."});
                console.log("Email no encontrado.")
            } else {
                if(bcrypt.compareSync(pass, Usuario.pass)) {
                    console.log("Login Exitoso");
                } else {
                    res.status(401).json({ msg: "Contraseña Incorrecta"});
                    console.log("Contraseña Incorrecta");
                }
            }
        })
    } catch (error) {
        return res.status(500).json(error)
    }
    res.json("Success");
}