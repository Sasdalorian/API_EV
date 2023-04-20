import { sequelize } from "../data.js";
import { DataTypes, Model } from "sequelize";

import { Usuario } from "./Usuario.js";
import { Areas } from "./Areas.js";

export class Voluntariados extends Model{};

Voluntariados.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true, 
        allowNull: false,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    ubicacion: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    duracion: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    quehacer: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    beneficio: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    img: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
},
{
    sequelize,
    tableName: 'voluntariados',
    createdAt: false,
    updatedAt: false,
    name: {
        singular: "voluntariado",
        plural: "voluntariados"
    }
});

// Muchos a Muchos, NaN

// //Voluntariados tiene muchas Areas
// // Crea nueva tabla en la base de datos llamada areavolunt
// Voluntariados.belongsToMany(Areas, { through: "areavolunt"});
// Areas.belongsToMany(Voluntariados, {through: "areavolunt"});

Voluntariados.belongsToMany(Areas, {through: "Areavolunt"});
Areas.belongsToMany(Voluntariados, {through: "Areavolunt"});