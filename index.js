import express from "express";
import { Usuario } from "./database/models/Usuario.js";
import { Voluntariados } from "./database/models/Voluntariados.js";
import { Areas } from "./database/models/Areas.js";

const app = express();

app.use(express.json());

app.listen(4000, (req,res) => {
    console.log('La DB se ha conectado al puerto 4000');
});

// MOSTRAR VOLUNTARIADOS
app.get("/api/v1/voluntariados", async (req, res) => {
    const resultado = await Voluntariados.findAll({
        include: {
            model: Areas,
            attributes: ["nombreArea"]
        },
        attributes: ["titulo", "ubicacion", "duracion", "quehacer", "beneficio", "cantidad", "img"]
    }).then(resultado => res.json(resultado))
});

// FILTRAR VOLUNTARIADOS
app.get("/api/v2/voluntariados", async (req,res) => {
    const resultado = await Voluntariados.findAll({
        include: {
            model: Areas,
            attributes: ["nombreArea"],
            where: {id: 1}
        },
        attributes: ["titulo", "ubicacion", "duracion", "quehacer", "beneficio", "cantidad", "img"]
    }).then(resultado => res.json(resultado))
});

// RENOVAR
// app.post("registerVoluntario", (req, res) => {
//     Usuario.create({
//         nombre: req.body.nombre,
//         apellidos: req.body.apellidos,
//         email: req.body.email,
//         pass: req.body.pass,
//         idrol: 2
//     })
//     res.redirect("/");
// });

// // CREATE /api/users    // ANFITRION
// app.post("/api/v1/registerAnfitrion", (req,res) => {
//     Usuario.create({
//         nombre: req.body.nombre,
//         apellidos: req.body.apellidos,
//         email: req.body.email,
//         pass: req.body.pass,
//         idrol: 3
//     })
//     res.redirect("/");
// });