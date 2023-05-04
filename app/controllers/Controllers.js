
// IMPORT MODELS
import { Areas } from "../models/Areas.js";
import { Voluntariados } from "../models/Voluntariados.js";
import { Rol } from "../models/Rol.js";
import { Usuario } from "../models/Usuario.js";

// AGREGAR USUARIO
export async function agregarUsuario(nombre, apellidos, email, pass, idrol) {
    try {
        const usuario = await Usuario.create({
            nombre: nombre,
            apellidos: apellidos,
            email: email,
            pass: pass,
            idrol: idrol
        })
        console.log(`Se ha agregado el Usuario ${nombre}.`);
        return true;
    } catch (err) {
        console.error("No se ha podido agregar al usuario.", err);
        return false;
    }
};

// AGREGAR AREAS
export async function agregarArea(nombre) {
    try {
        const area = await Areas.create({
            nombreArea: nombre
        });
        console.log(`Se ha agregado el Area ${nombre}.`);
        return true;
    } catch (err) {
        console.error("No se ha podido agregar el area.", err);
        return false;
    }
};

// AGREGAR TABLA VOLUNTARIADO
export async function agregarVoluntariado(titulo, ubicacion, duracion, quehacer, beneficio, cantidad, img, areas) {
    try {
        const voluntariado = await Voluntariados.create({
            titulo,
            ubicacion,
            duracion,
            quehacer,
            beneficio,
            cantidad,
            img
        });
        const promises = areas.map(async element => {
            const area = await Areas.findByPk(element);
            await voluntariado.addArea(area, { through: { selfGranted: false } });
        });
        await Promise.all(promises);
        console.log("Se ha agregado el Voluntariado.");
        return true;
    } catch (err) {
        console.error("No se ha podido agregar el voluntariado.", err)
    }
}

// AGREGAR ROLES
export async function agregarRol(nombre) {
    try {
        
        const rol = await Rol.create({
            clase: nombre
        });
        console.log(`Se ha agregado el Rol ${nombre}.`);
        return true;
    } catch (err) {
        console.error("No se pudo agregar el nivel del rol.", err);
        return false;
    };
};