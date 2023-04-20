import { sequelize } from "../data.js";
import { DataTypes, Model } from "sequelize";

export class Post extends Model{};

Post.init({
    title: DataTypes.STRING,
    body: DataTypes.TEXT
},
{
    sequelize,
    modelName: "post"
});