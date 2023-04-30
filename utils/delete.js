import { Voluntariados } from "../app/models/Voluntariados.js";

export async function deleteVolunt (req, res) {
    try {
        const {id} = req.params;
        const resultado = await Voluntariados.destroy({
            where: {
                id: id
            }
        });
        res.sendStatus(204)
        console.log(`El Voluntariado con el id: ${id} ha sido eliminado`);
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
};