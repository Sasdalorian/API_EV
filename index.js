
import app from "./app.js";
import { sequelize } from "./database/data.js";

//IMPORTAR MODELOS
import { Rol } from "./database/models/Rol.js";
import { Usuario } from "./database/models/Usuario.js";
import { Voluntariados } from "./database/models/Voluntariados.js";
import { Areas } from "./database/models/Areas.js";

    // CONECTAR DB A PUERTO 4000
async function conectarDB() {
    try {
        await sequelize.authenticate();
        app.listen(4000);
        console.log("Conexion establecida a la DB");
    } catch (error) {
        console.log("Error al conectar a la DB", error)
    }
};
conectarDB();



    // MOSTRAR VOLUNTARIADOS
app.get("/api/v1/voluntariados", async (req, res) => {
    const resultado = await Voluntariados.findAll({
        include: {
            model: Areas,
            attributes: ["nombreArea"]
        },
        attributes: ["titulo", "ubicacion", "duracion", "quehacer", "beneficio", "cantidad", "img"]
    }).then(resultado => res.json(resultado));
});

    // REGISTRAR VOLUNTARIO
app.post("/api/v1/registerVoluntario", (req, res) => {
    Usuario.create({
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        email: req.body.email,
        pass: req.body.pass,
        idrol: 2
    })
    res.json("Success");
});

    // REGISTRAR ANFITRION
app.post("/api/v1/registerAnfitrion", (req,res) => {
    Usuario.create({
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        email: req.body.email,
        pass: req.body.pass,
        idrol: 3
    })
    res.json("Success");
});

// FILTRAR VOLUNTARIADOS POR AREA ID
// app.get("/api/v1/voluntariados/:id", async (req, res) => {
//     let idParams = req.params.id;    
//     console.log(idParams);

//     const resultado = await Voluntariados.findAll({
//         include: {
//             model: Areas,
//             attributes: ["nombreArea"],
//             where: {id: idParams}
//         },
//         attributes: ["titulo", "ubicacion", "duracion", "quehacer", "beneficio", "cantidad", "img"]
//     }).then(resultado => res.json(resultado))
// });