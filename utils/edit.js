
// EDITAR VOLUNTARIADO
export const editarVolunt = async (req, res) => {
    try {
        const {titulo, ubicacion, duracion, quehacer, beneficio, cantidad, img, areas} = req.body;
        const cuerpo = {titulo, ubicacion, duracion, quehacer, beneficio, cantidad, img, areas}
        console.log(cuerpo)
    } catch (error) {
        return res.status(500).json(error);
    }
}