import { Usuario } from "../app/models/Usuario.js";
import { Rol } from "../app/models/Rol.js";
import { Areas } from "../app/models/Areas.js";
import { Voluntariados } from "../app/models/Voluntariados.js";

// MOSTRAR USUARIOS
export async function mostrarUsuarios(req, res) {
    try {
        const resultado = await Usuario.findAll({
            include: {
                model: Rol,
                attributes: ["clase"],
                where: {idrol: [2, 3]}
            },
            attributes: ["id_usuario", "nombre", "apellidos", "email", "idrol"]
        }).then(resultado => res.json(resultado));
    } catch (error) {
        console.log(error)
    }
};

//FILTRAR VOLUNTARIADOS POR AREA

// MOSTRAR ADMINS
export async function mostrarAdmins(req, res) {
    try {
        const resultado = await Usuario.findAll({
            include: {
                model: Rol,
                attributes: ["clase"],
                where: {idrol: 1}
            },
            attributes: ["id_usuario", "nombre", "apellidos", "email"]
        }).then(resultado => res.json(resultado));
    } catch (error) {
        console.log(error)
    }
};