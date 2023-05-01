// Models
import { Usuario } from "../models/Usuario.js";

// AGREGAR VOLUNTARIADO
export const nuevoVoluntario = async (req, res) => {
    try {
      // Rescatamos los parametros del body
      const {nombre, apellidos, email, passE} = req.body;
      // Designamos el idRol de Voluntariado
      const idRol = 2;
      console.log(nombre, apellidos, email, passE);
  
      // Verificar si el usuario a registrar existe en la tabla
      const usuarioExistente = await Usuario.findOne({email: email});
      if (usuarioExistente) {
        return res.status(400).json({mensaje: 'El correo electrónico ya está registrado'});
      }
      // Si no existe, se creara e ingresara en la tabla Usuario
      const resultado = await Usuario.create({
        nombre: nombre,
        apellidos: apellidos,
        email: email,
        pass: passE,
        idrol: idRol
      });
      console.log("Voluntariado Creado")
      res.json(resultado);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

// AGREGAR Anfitrion
export const nuevoAnfitrion = async (req, res) => {
    try {
      // Rescatamos los parametros del body
      const {nombre, apellidos, email, passE} = req.body;
      // Designamos el idRol de Anfitrion
      const idRol = 3;
      console.log(nombre, apellidos, email, passE);

      // Si no existe, se creara e ingresara en la tabla Usuario
      const usuarioExistente = await Usuario.findOne({email: email});
      if (usuarioExistente) {
      return res.status(400).json({mensaje: 'El correo electrónico ya está registrado'});
    }
  
    const resultado = await Usuario.create({
        nombre: nombre,
        apellidos: apellidos,
        email: email,
        pass: passE,
        idrol: idRol
    });
        console.log("Anfitrion creado");
        res.json(resultado);
    } catch (error) {
      return res.status(500).json({message: error.message});
    }
  }