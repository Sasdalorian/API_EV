import { sequelize } from "../data.js";
import { DataTypes, Model } from "sequelize";

export class Areas extends Model{};

Areas.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    nombreArea: {
        type: DataTypes.STRING(25),
        allowNull: false
    }
}, 
{
    sequelize,
    tableName: 'areas',
    createdAt: false,
    updatedAt: false,
    name: {
        singular: "area",
        plural: "areas"
    }
});