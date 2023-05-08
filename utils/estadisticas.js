import sequelize from "sequelize";
import { Areas } from "../app/models/Areas.js"
import { Voluntariados } from "../app/models/Voluntariados.js"
import { Usuario } from "../app/models/Usuario.js";
import { Rol } from "../app/models/Rol.js";


// MOSTRAR TOP AREAS
// Traer la cantidad de administradores y clientes
export const topAreas = async (req, res) => {
  try {
    const resultado = await Areas.findAll({
      attributes: [
        'id_area',
        'nombreArea',
        [sequelize.fn('count', sequelize.fn('DISTINCT', sequelize.col('voluntariados.id'))), 'cantidad']
      ],
      include: [
        {
          model: Voluntariados,
          attributes: [],
          through: { attributes: [] }
        }
      ],
      group: [
        'Areas.id_area',
        'Areas.nombreArea'
      ]
    });
    return resultado;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const topAreasDesc = async (req, res) => {
  try {
    const resultado = await Areas.findAll({
      attributes: [
        'id_area',
        'nombreArea',
        [sequelize.fn('count', sequelize.fn('DISTINCT', sequelize.col('voluntariados.id'))), 'cantidad']
      ],
      include: [
        {
          model: Voluntariados,
          attributes: [],
          through: { attributes: [] }
        }
      ],
      group: [
        'Areas.id_area',
        'Areas.nombreArea'
      ],
      order: [
        [sequelize.literal('cantidad'), 'DESC']
      ]
    });
    return resultado;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const topAreasAsc = async (req, res) => {
  try {
    const resultado = await Areas.findAll({
      attributes: [
        'id_area',
        'nombreArea',
        [sequelize.fn('count', sequelize.fn('DISTINCT', sequelize.col('voluntariados.id'))), 'cantidad']
      ],
      include: [
        {
          model: Voluntariados,
          attributes: [],
          through: { attributes: [] }
        }
      ],
      group: [
        'Areas.id_area',
        'Areas.nombreArea'
      ],
      order: [
        [sequelize.literal('cantidad'), 'ASC']
      ]
    });
    return resultado;
  } catch (error) {
    throw new Error(error.message);
  }
};

export async function contarVoluntarios(req, res) {
  try {
    const resultado = await Usuario.count({
      where: { idrol: 2 },
      include: {
        model: Rol,
        attributes: []
      },
    });
    return resultado;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function contarAnfitriones(req, res) {
  try {
    const resultado = await Usuario.count({
      where: { idrol: 3 },
      include: {
        model: Rol,
        attributes: []
      },
    });
    return resultado;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function contarAdmins(req, res) {
  try {
    const resultado = await Usuario.count({
      where: { idrol: 1 },
      include: {
        model: Rol,
        attributes: []
      },
    });
    return resultado;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function contarVoluntariados(req, res) {
  try {
    const cantidadVoluntariados = await Voluntariados.count();
    return cantidadVoluntariados;
  } catch (error) {
    throw new Error(error.message);
  }
}

export const controladorEstadisticas = async (req, res) => {
  try {
    let resultado;

    const voluntariosResultado = await contarVoluntarios(req, res);
    const anfitrionesResultado = await contarAnfitriones(req, res);
    const adminsResultado = await contarAdmins(req, res);
    const voluntariadosResultado = await contarVoluntariados(req, res);

    const resultadoFinal = {
      voluntarios: voluntariosResultado,
      anfitriones: anfitrionesResultado,
      admins: adminsResultado,
      voluntariados: voluntariadosResultado
    };

    res.json(resultadoFinal);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};