import { Voluntariados } from "../models/Voluntariados.js";
import { Areas } from "../models/Areas.js";
import { Rol } from "../models/Rol.js";
import { Usuario } from "../models/Usuario.js";

// Agregar Voluntariado
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
//Agregar Usuario
export async function agregarUsuario(nombre, apellidos, email, pass, idrol, img, descripcion) {
    try {
        let imagenPorDefecto = './img/imgUser/imagenAlternativa.png';
        if (!img) {
            img = imagenPorDefecto;
        }
        const usuario = await Usuario.create({
            nombre: nombre,
            apellidos: apellidos,
            email: email,
            pass: pass,
            idrol: idrol,
            img: img,
            descripcion: descripcion
        })
        console.log(`Se ha agregado el Usuario ${nombre}.`);
        return true;
    } catch (err) {
        console.error("No se ha podido agregar al usuario.", err);
        return false;
    }
};

// Agregar Areas
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