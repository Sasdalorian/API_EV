// CONTROLADORES
import { agregarUsuario } from "./Controllers.js";

// AGREGAR VOLUNTARIADO
export const nuevoVoluntario = async (req, res) => {
    try {
    // Rescatamos los parametros del body
    const {nombre, apellidos, email, passE} = req.body;
    // Designamos el idRol de Voluntariado
    const idRol = 2;
    console.log(nombre, apellidos, email, passE);
    // Si no existe, se creara e ingresara en la tabla Usuario
    agregarUsuario(nombre, apellidos, email, passE, idRol);
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
    
    agregarUsuario(nombre, apellidos, email, passE, idRol)
    res.json(resultado);
  } catch (error) {
      return res.status(500).json({message: error.message});
  }
}