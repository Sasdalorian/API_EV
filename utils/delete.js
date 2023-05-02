import { Usuario } from "../app/models/Usuario.js";
import { Voluntariados } from "../app/models/Voluntariados.js";

// Eliminar Voluntariado
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
        console.log(`El Voluntariado con el id: ${id}, ha sido eliminado`);
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
};

// Eliminar Usuario
export async function deleteUsuario (req, res) {
    try {
        // Se captura el id de la URL
        const {id} = req.params;
        // Se busca entre los voluntariados el id que capturamos para eliminarlo
        const resultado = await Usuario.destroy({
            where: {
                id_usuario: id
            }
        });
        res.sendStatus(204)
        console.log(`El Usuario con el id: ${id}, ha sido eliminado`);
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
};

// Eliminar Admin
export async function deleteAdmin (req, res) {
    try {
        // Se captura el id de la URL
        const {id} = req.params;
        // Se busca entre los voluntariados el id que capturamos para eliminarlo
        const resultado = await Usuario.destroy({
            where: {
                id_usuario: id
            }
        });
        res.sendStatus(204)
        console.log(`El Usuario con el id: ${id}, ha sido eliminado`);
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
};