import { agregarUsuario, agregarVoluntariado } from "../app/controllers/addControllers.js";

// CREAR NUEVO VOLUNTARIO
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

// CREAR NUEVO USUARIO
export const nuevoUsuario = async (req, res) => {
    try {
        console.log(req.body)
        // Rescatamos los parametros del body
        const {nombre, apellidos, email, passE, idrol, img, descripcion} = req.body;
        console.log(nombre, apellidos, email, passE, idrol, img, descripcion);

        const resultado = agregarUsuario(nombre, apellidos, email, passE, idrol, img, descripcion);
        res.json(resultado)
    } catch (error) {
        return res.status(500).json(error);
    }
}

// CREAR NUEVO ADMIN
export const nuevoAdmin = async (req, res) => {
    try {
        // Rescatamos los parametros del body
        const {nombre, apellidos, email, passE, img, descripcion} = req.body;
        const idrol = 1
        console.log(nombre, apellidos, email, passE, idrol, img, descripcion);
        const resultado = agregarUsuario(nombre, apellidos, email, passE, idrol, img, descripcion);
        res.json(resultado);
    } catch (error) {
        return res.status(500).json(error);
    }
}