import { Areas } from "../app/models/Areas.js";
import { Voluntariados } from "../app/models/Voluntariados.js";

// MOSTRAR VOLUNTARIADOS
export async function mostrarVoluntariados(req, res) {
    try {
      // Se busca entre todos los voluntariados
        const resultado = await Voluntariados.findAll({
          // Se incluye la tabla Areas con sus atributos
          include: {
            model: Areas,
            attributes: ["id_area","nombreArea"]
          },
          // Se eligen los atributos a mostrar de Voluntariados
          attributes: ["id", "titulo", "ubicacion", "duracion", "quehacer", "beneficio", "cantidad", "img"]
        }).then(resultado => res.json(resultado));
    } catch (error) {
        console.log(error)
    }
};