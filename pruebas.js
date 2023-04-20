import { Rol } from "./database/models/Rol.js";
import { Usuario } from "./database/models/Usuario.js";
import { Areas} from "./database/models/Areas.js";
import { Voluntariados } from "./database/models/Voluntariados.js";
// import { Areavolunt } from "./database/models/Areavolunt.js";

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

await agregarVoluntariado("Enseñanza a niños de entre 5 a 8 años", "Valparaiso", "3 semanas", "Turno Diurno, Enseñar, Limpieza", "2 comidas, habitacion compartida", 4, "./img/voluntariado/voluntariadoninos.jpeg", [1]);
await agregarVoluntariado("Cuidado de animales y niños", "Viña del Mar", "2 semanas", "Turno Diurno, Cuidar, Limpieza", "3 comidas, Habitacion privada", 1, "./img/voluntariado/niños-perros.jpg", [1, 4]);
await agregarVoluntariado("Cuidado de animales y niños", "Viña del Mar", "2 semanas", "Turno Diurno, Cuidar, Limpieza", "3 comidas, Habitacion privada", 1, "./img/voluntariado/niños-perros.jpg", [1, 7, 3]);

