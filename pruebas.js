import { syncTables } from "./index.js";
import { agregarUsuario, agregarRol, agregarVoluntariado, agregarArea } from "./app/controllers/addControllers.js";

await syncTables();
await agregarRol("Admin");
await agregarRol("Voluntario");
await agregarRol("Anfitrion");

await agregarUsuario("Sas", "MahFoo", "esteban.nicolas.sd@gmail.com", "$2b$10$/DeBSdsZOBmtVj/4NQXCpuuNhCpyevGfeKH/LK4OQ6wjRfjiahEeC", 1, "./img/imgUser/krauser.jfif", "SISOY YOOOO");
await agregarUsuario("Bryan", "Contreras", "bryan.contreras@gmail.com", "$2b$10$/DeBSdsZOBmtVj/4NQXCpuuNhCpyevGfeKH/LK4OQ6wjRfjiahEeC", 2);
await agregarUsuario("Ignacio", "Wallace", "ignacio.wallace@gmail.com", "$2b$10$/DeBSdsZOBmtVj/4NQXCpuuNhCpyevGfeKH/LK4OQ6wjRfjiahEeC", 3);

await agregarArea("Niños");
await agregarArea("Emergencias");
await agregarArea("Adulto Mayor");
await agregarArea("Animales");
await agregarArea("Discapacidad");
await agregarArea("Medio Ambiente");
await agregarArea("Talleres");
await agregarArea("Rural");
await agregarArea("Construccion");

await agregarVoluntariado("Enseñanza a niños de entre 5 a 8 años", "Valparaiso", "3 semanas", "Turno Diurno, Enseñar, Limpieza", "2 comidas, habitacion compartida", 4, "./img/voluntariado/voluntariadoninos.jpeg", [1]);
await agregarVoluntariado("Cuidado de animales y niños", "Viña del Mar", "2 semanas", "Turno Diurno, Cuidar, Limpieza", "3 comidas, Habitacion privada", 1, "./img/voluntariado/niños-perros.jpg", [1, 4]);
await agregarVoluntariado("Bioconstruccion y mantenimiento", "Laguna Verde", "Al menos 2 semanas", "Turno Diurno, Construccion, Limpieza, Pintura y Decoracion, Mantenimiento", "3 comida, habitacion compartida", 8, "./img/voluntariado/construccion.jpg", [9]);
await agregarVoluntariado("Cuidado de Adultos Mayores", "Viña del Mar", "1 semana", "Turno Diurno, Cuidar, Limpieza", "1 comida, Habitacion privada", 2, "./img/voluntariado/adultomayor.jpg", [3]);
await agregarVoluntariado("Ayuda en labores de campo", "Olmue", "2 semanas", "Turno Diurno y Nocturno, Cuidar, Limpieza", "2 comidas, Habitacion compartida", 4, "./img/voluntariado/rural.jpg", [8, 4]);
await agregarVoluntariado("Ayuda Teleton 2023", "Valparaiso", "2 semanas", "Turno Diurno, Cuidar, Enseñar", "2 comidas, Habitacion compartida", 6, "./img/voluntariado/teleton.jpg", [5]);

