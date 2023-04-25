import { Usuario } from "../models/Usuario.js";
import { Rol } from "../models/Rol.js";
import { Voluntariados } from "../models/Voluntariados.js";
import { Areas } from "../models/Areas.js";

export async function adminShowVolunt (req, res, next) {
    try {
        const resultado = await Voluntariados.findAll({
            include: {
                model: Areas,
                attributes: ["nombreArea"]
            },
            attributes: ["id", "titulo", "ubicacion", "duracion", "quehacer", "beneficio", "cantidad", "img"]
        }).then(resultado => res.json(resultado));
        next();
    } catch (error) {
        console.log(error)
    }
};

export async function deleteVolunt (req, res) {
    console.log("entra?")
    try {
        const {id} = req.params;
        const resultado = await Voluntariados.destroy({
            where: {
                id: id
            }
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
};
