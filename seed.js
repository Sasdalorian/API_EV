import { sequelize } from "./database/data.js";

import { Rol } from "./database/models/Rol.js";
import { Usuario } from "./database/models/Usuario.js";
import { Areas} from "./database/models/Areas.js";
import { Voluntariados } from "./database/models/Voluntariados.js";

import { syncTables, agregarRol, agregarUsuario, agregarArea, agregarVoluntariado } from "./utils/sqlfuncion.js";

await syncTables();
await agregarRol("Admin");
await agregarRol("Voluntario");
await agregarRol("Anfitrion");

await agregarUsuario("Sas", "MahFoo", "esteban.nicolas.sd@gmail.com", "1234", 1);
await agregarUsuario("Bryan", "Contreras", "bryan.contreras@gmail.com", "1234", 2);
await agregarUsuario("Ignacio", "Wallace", "ignacio.wallace@gmail.com", "1234", 3);

await agregarArea("Niños");
await agregarArea("Emergencias");
await agregarArea("Adulto Mayor");
await agregarArea("Animal");
await agregarArea("Discapacidad");
await agregarArea("Medio Ambiente");
await agregarArea("Talleres");
await agregarArea("Rural");
await agregarArea("Construccion");