import { sequelize } from "./config/database.js";
import app from "./app/app.js";

async function conectarDB() {
    try {
        await sequelize.authenticate();
        app.listen(4000);
        console.log("Conexion establecida a la DB");
    } catch (error) {
        console.log("Error al conectar a la DB", error)
    }
};

// CARGAR TABLAS
export async function syncTables() {
    try {
        await sequelize.sync({ force: true })
        console.log("Tablas sincronizadas correctamente.")
    } catch (error) {
        console.error("No se han podido sincronizar las Tablas.")
    };
};

conectarDB();

