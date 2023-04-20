import { sequelize } from "../data.js";
import { DataTypes, Model } from "sequelize";

export class Rol extends Model{};

Rol.init({
    idrol: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    clase: {
        type: DataTypes.STRING(10),
        allowNull: false
    }
},
{
    sequelize,
    tableName: 'roles',
    createdAt: false,
    updatedAt: false,
    name: { 
        singular: "rol",
        plural: "roles"
    }
});