import { editarVoluntariado } from "../app/controllers/editControllers.js";


export const editarVolunt = async (req, res) => {
    try {
    // Rescatamos los parametros del body
    const {id, titulo, ubicacion, duracion, quehacer, beneficio, cantidad, img, areas} = req.body;
    // Designamos el idRol de Voluntariado
    console.log(id, titulo, ubicacion, duracion, quehacer, beneficio, cantidad, img, areas);
    // Si no existe, se creara e ingresara en la tabla Usuario
    editarVoluntariado(id, titulo, ubicacion, duracion, quehacer, beneficio, cantidad, img, areas.split(',').map(Number));
    res.json(resultado);
  } catch (error) {
      return res.status(500).json(error);
  }
}