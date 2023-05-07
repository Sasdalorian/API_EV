import { Voluntariados } from "../models/Voluntariados.js";
import { Areas } from "../models/Areas.js";
import { Usuario } from "../models/Usuario.js";

// EDITAR VOLUNTARIADO
export async function editarVoluntariado(idvoluntariado, titulo, ubicacion, duracion, quehacer, beneficio, cantidad, img, areas, descripcion) {
    try {
        // Buscamos el voluntariado a modificar por su id
        const voluntariado = await Voluntariados.findByPk(idvoluntariado);

        if (!voluntariado) {
            console.error(`No se encontró el voluntariado con ID ${idvoluntariado}.`);
            return false;
        }

        // Actualizamos los datos del voluntariado
        voluntariado.titulo = titulo;
        voluntariado.ubicacion = ubicacion;
        voluntariado.duracion = duracion;
        voluntariado.quehacer = quehacer;
        voluntariado.beneficio = beneficio;
        voluntariado.cantidad = cantidad;
        voluntariado.img = img;
        voluntariado.descripcion = descripcion;
        await voluntariado.save();

        // Actualizamos las áreas asociadas al voluntariado
        await voluntariado.removeAreas();
        const promises = areas.map(async element => {
            const area = await Areas.findByPk(element);
            await voluntariado.addArea(area, { through: { selfGranted: false } });
        });
        await Promise.all(promises);

        console.log(`Se ha modificado el Voluntariado con ID ${idvoluntariado}.`);
        return true;
    } catch (err) {
        console.error(`No se ha podido modificar el voluntariado con ID ${idvoluntariado}.`, err)
    }
}

export async function editarUsuario(idusuario, nombre, apellidos, email, pass, idrol, img, descripcion) {
    try {
        const usuario = await Usuario.findByPk(idusuario);
        if (!usuario) {
            console.error(`No se encontró el usuario con ID ${idusuario}`);
            return false;
        }

        // Actualizamos los datos del Usuario
        usuario.nombre = nombre;
        usuario.apellidos = apellidos;
        usuario.email = email;
        usuario.pass = pass;
        usuario.img = img;
        usuario.descripcion = descripcion;
        usuario.idrol = idrol;
        await usuario.save();

        console.log(`Se ha modificado el Usuario con ID ${idusuario}.`);
    } catch (error) {
        console.error(`No se ha podido modificar el Usuario con ID aquiponerid.`, error)
    }
}