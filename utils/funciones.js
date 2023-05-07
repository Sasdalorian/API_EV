import { Usuario } from "../app/models/Usuario.js";
import { Rol } from "../app/models/Rol.js";
import { Voluntariados } from "../app/models/Voluntariados.js";
import { Areas } from "../app/models/Areas.js";

// MOSTRAR USUARIOS
export async function mostrarUsuarios(req, res) {
    try {
        const resultado = await Usuario.findAll({
            include: {
                model: Rol,
                attributes: ["clase"],
                where: {idrol: [2, 3]}
            },
            attributes: ["id_usuario", "nombre", "apellidos", "email", "idrol"],
            order: [["id_usuario", "ASC"]]
        }).then(resultado => res.json(resultado));
    } catch (error) {
        console.log(error)
    }
};

// MOSTRAR ADMINS
export async function mostrarAdmins(req, res) {
    try {
        const resultado = await Usuario.findAll({
            include: {
                model: Rol,
                attributes: ["clase"],
                where: {idrol: 1}
            },
            attributes: ["id_usuario", "nombre", "apellidos", "email"],
            order: [["id_usuario", "ASC"]]
        }).then(resultado => res.json(resultado));
    } catch (error) {
        console.log(error)
    }
};

// MOSTRAR VOLUNTARIADOS
export async function mostrarVoluntariados(req, res) {
    try {
      // Se busca entre todos los voluntariados
      const resultado = await Voluntariados.findAll({
        // Se incluye la tabla Areas con sus atributos
        include: {
          model: Areas,
          attributes: ["id_area", "nombreArea"]
        },
        // Se eligen los atributos a mostrar de Voluntariados
        attributes: ["id", "titulo", "ubicacion", "duracion", "quehacer", "beneficio", "cantidad", "img"],
        order: [["id", "ASC"]]
      }).then(resultado => res.json(resultado));
    } catch (error) {
      console.log(error)
    }
  };