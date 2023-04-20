import { sequelize } from "../database/data.js";
import { Rol } from "../database/models/Rol.js";
import { Usuario } from "../database/models/Usuario.js";
import { Areas } from "../database/models/Areas.js";
import { Voluntariados } from "../database/models/Voluntariados.js";
// import { Areavolunt } from "../database/models/Areavolunt.js";

// CARGAR TABLAS
export async function syncTables() {
    try {
        await sequelize.sync({ force: true })
        console.log("Tablas sincronizadas correctamente.")
    } catch (error) {
        console.error("No se han podido sincronizar las Tablas.")
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
        areas.forEach(async element => {
            const area = await Areas.findByPk(element);
            await voluntariado.addArea(area, { through: { selfGranted: false } });
        });
        console.log("Se ha agregado el Voluntariado.");
        return true;
    } catch (err) {
        console.error("No se ha podido agregar el voluntariado.", err)
    }
}
