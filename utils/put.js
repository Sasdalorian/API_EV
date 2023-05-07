import { editarAdmin, editarUsuario, editarVoluntariado } from "../app/controllers/editControllers.js";

export const editarVolunt = async (req, res) => {
  try {
    const { id, tituloE, ubicacionE, duracionE, quehacerE, beneficioE, cantidadE, img, areasE } = req.body;
    editarVoluntariado(id, tituloE, ubicacionE, duracionE, quehacerE, beneficioE, cantidadE, img, areasE.split(',').map(Number));

    res.json(resultado);
  } catch (error) {
    return res.status(500).json(error);
  }
}

export const editUser = async (req, res) => {
  try {
    const { id, nombreE, apellidosE, emailE, passE, idrolE, img, descripcionE } = req.body;
    editarUsuario(id, nombreE, apellidosE, emailE, passE, idrolE, img, descripcionE);

    res.json(resultado);
  } catch (error) {
    return res.status(500).json(error);
  }
}

export const editAdmin = async (req, res) => {
  try {
    const { id, nombreE, apellidosE, emailE, passE, img, descripcionE } = req.body;
    editarAdmin(id, nombreE, apellidosE, emailE, passE, img, descripcionE );

    res.json(resultado);
  } catch (error) {
    return res.status(500).json(error);
  }
}