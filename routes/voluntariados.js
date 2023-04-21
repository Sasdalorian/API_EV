import { Router } from "express";
import { Voluntariados } from "../database/models/Voluntariados";
import { Areas } from "../database/models/Areas";

const volunRouter = Router();

export const showVoluntariados = async (req,res) => {
    try {
        
    } catch (err) {
        return res.status(500).json({message: err.message})
    }
}