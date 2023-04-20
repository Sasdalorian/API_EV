-- Active: 1681744154754@@127.0.0.1@5432@proyectoind@public

CREATE DATABASE proyectoind;
USE proyectoind;
CREATE TABLE rol (
    idrol SERIAL PRIMARY KEY NOT NULL UNIQUE,
    nivel VARCHAR(10) NOT NULL UNIQUE
);
INSERT INTO rol (nivel) VALUES ('admin'), ('voluntario'), ('anfitrion');

CREATE TABLE usuario (
    idusuario SERIAL PRIMARY KEY NOT NULL UNIQUE,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    rol_idrol INT NOT NULL,
    pass VARCHAR(8) NOT NULL
);
INSERT INTO usuario (nombre, apellido, email, rol_idrol, pass) VALUES ('Sas', 'MahFoo', 'correo@correo.cl', 1, '1234');

ALTER TABLE usuario ADD CONSTRAINT fk_idrol_usuario FOREIGN KEY (rol_idrol) REFERENCES rol(idrol);
CREATE TABLE areas (
    idareas SERIAL PRIMARY KEY NOT NULL UNIQUE,
    area VARCHAR(25) NOT NULL
);
INSERT INTO areas (area) VALUES ('Niños'), ('Emergencias'), ('Adulto Mayor'), ('Animal'), ('Discapacidad'), ('Medio Ambiente'), ('Talleres'), ('Rural'), ('Construccion');
CREATE TABLE tablaVoluntariado (
    id SERIAL PRIMARY KEY NOT NULL UNIQUE,
    titulo VARCHAR(75) NOT NULL,
    area_idareas INT NOT NULL,
    ubicacion VARCHAR(150) NOT NULL,
    duracion VARCHAR(50) NOT NULL,
    quehacer VARCHAR(50) NOT NULL,
    beneficio VARCHAR(150) NOT NULL,
    cantidad INT NOT NULL,
    img VARCHAR(150) NOT NULL,
    usuario_idusuario INT NOT NULL
);
ALTER TABLE tablaVoluntariado ADD CONSTRAINT fk_idareas_areas FOREIGN KEY (area_idareas) REFERENCES areas(idareas);
ALTER TABLE tablaVoluntariado ADD CONSTRAINT fk_idusuario_usuario FOREIGN KEY (usuario_idusuario) REFERENCES usuario(idusuario);

INSERT INTO tablaVoluntariado (titulo, area_idareas, ubicacion, duracion, quehacer, beneficio, cantidad, img, usuario_idusuario) VALUES
    ("Enseñanza a niños de entre 5 a 8 años", 1, "Valparaiso", "3 Semanas", "Turno Diurno, Enseñar, Limpieza", "2 comidas, habitacion compartida", 4, "./img/voluntariado/voluntariadoninos.jpeg", 1);
    
SELECT * FROM roles;
SELECT * FROM usuarios;
SELECT * FROM Areas; 
SELECT * FROM Voluntariados;


DROP TABLE areas;
DROP TABLE roles;
DROP TABLE voluntariados;
DROP TABLE usuarios;
DROP TABLE idAreaVolun;


DROP DATABASE proyectoind;
