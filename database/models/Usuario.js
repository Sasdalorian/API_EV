import { sequelize } from "../data.js";
import { DataTypes, Model } from "sequelize";

import { Rol } from "./Rol.js"; 

export class Usuario extends Model{};

Usuario.init({
    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true  
    },
    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            notNull: {
                msg: "El campo no puede ser nulo"
            }
        }      
    },
    apellidos: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            notNull: {
                msg: "El campo no puede ser nulo"
            }
        }      
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            isEmail: {
                args: true,
                msg: "El campo tiene que ser un correo valido"
            },
            notNull: {
                msg: "El campo no puede ser nulo"
            }
        }
    },
    pass: {
        type: DataTypes.STRING(10),
        allowNull: false,
        validate: {
            notNull: {
                msg: "El campo no puede ser nulo"
            }
        }
    }
},
{
    sequelize,
    tableName: 'usuarios',
    createdAt: false,
    updatedAt: false,
    name: { 
        singular: "usuario",
        plural: "usuarios"
    }
});

// Muchos a uno, N a 1
Rol.hasMany(Usuario, {foreignKey: "idrol"});
// Uno a Muchos, 1 a N
Usuario.belongsTo(Rol, {foreignKey: "idrol"});



