import { Voluntariados } from "../app/models/Voluntariados.js";

export async function deleteVolunt (req, res) {
    try {
        // Se captura el id de la URL
        const {id} = req.params;
        // Se busca entre los voluntariados el id que capturamos para eliminarlo
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