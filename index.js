import express from "express";
import pg from "pg";
import { sequelize } from "./database/data.js";

const app = express()
const { Pool } = pg;

app.use(express.json());

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    database: "proyectoind",
    password: "1234",
    port: 5432
});

app.listen(4000, (req,res) => {
    console.log('La DB se ha conectado al puerto 4000');
});

app.get("/api/v1/voluntariados", async (req, res) => {
    const resultado = await pool.query(`SELECT * FROM voluntariados ORDER BY id`);
    res.json(resultado.rows);
});


// RENOVAR
// app.post("/api/v1/registerVoluntario", (req, res) => {
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