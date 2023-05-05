import { agregarVoluntariado } from "../app/controllers/addControllers.js";

export const nuevoVoluntariado = async (req, res) => {
    try {
        // Rescatamos los parametros del body
        const {titulo, ubicacion, duracion, quehacer, beneficio, cantidad, img, areas} = req.body;
        // Designamos el idRol de Voluntariado
        console.log(titulo, ubicacion, duracion, quehacer, beneficio, cantidad, img, areas);
        // Si no existe, se creara e ingresara en la tabla Usuario
        const resultado = await agregarVoluntariado(titulo, ubicacion, duracion, quehacer, beneficio, cantidad, img, areas.split(',').map(Number));
        res.json(resultado);
    } catch (error) {
        return res.status(500).json(error);
    }
}