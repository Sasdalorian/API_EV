import { Areas } from "../app/models/Areas.js"
import { Voluntariados } from "../app/models/Voluntariados.js"

// ORDENAR Tabla Admins VOLUNTARIADOS por ID DESC
export async function mostrarVoluntariadosDesc(req, res) {
    try {
        const resultado = await Voluntariados.findAll({
            include: {
                model: Areas,
                attributes: ["id","nombreArea"]
            },
            attributes: ["id", "titulo", "ubicacion", "duracion", "quehacer", "beneficio", "cantidad", "img"],
            order: [["id", "DESC"]]
        }).then(resultado => res.json(resultado));
    } catch (error) {
        console.log(error)
    }
};
// ORDENAR Tabla Admins VOLUNTARIADOS por ID ASC
export async function mostrarVoluntariadosAsc(req, res) {
    try {
        const resultado = await Voluntariados.findAll({
            include: {
                model: Areas,
                attributes: ["id","nombreArea"]
            },
            attributes: ["id", "titulo", "ubicacion", "duracion", "quehacer", "beneficio", "cantidad", "img"],
            order: [["id", "ASC"]]
        }).then(resultado => res.json(resultado));
    } catch (error) {
        console.log(error)
    }
};