import sequelize from "sequelize";
import { Usuario } from "../app/models/Usuario.js";
import { Rol } from "../app/models/Rol.js";
import { Areas } from "../app/models/Areas.js"
import { Voluntariados } from "../app/models/Voluntariados.js"


// MOSTRAR VOLUNTARIADOS
export async function mostrarVoluntariados(req, res) {
    try {
        const resultado = await Voluntariados.findAll({
            include: {
                model: Areas,
                attributes: ["id_area","nombreArea"]
            },
            attributes: ["id", "titulo", "ubicacion", "duracion", "quehacer", "beneficio", "cantidad", "img"]
        }).then(resultado => res.json(resultado));
    } catch (error) {
        console.log(error)
    }
};

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
            through: { attributes: [] } // Omitir los campos de la tabla intermedia
          }
        ],
        group: [
          'Areas.id_area',
          'Areas.nombreArea'
        ]
      });
      res.json(resultado);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
};

// TOP AREAS DESC
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
            through: { attributes: [] } // Omitir los campos de la tabla intermedia
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
      res.json(resultado);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
};

// Top Areas Asc
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
            through: { attributes: [] } // Omitir los campos de la tabla intermedia
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
      res.json(resultado);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
};




  // BORRAR
// ORDENAR Tabla Admins VOLUNTARIADOS por ID DESC
export async function mostrarVoluntariadosDesc(req, res) {
    try {
        const resultado = await Voluntariados.findAll({
            include: {
                model: Areas,
                attributes: ["id_area","nombreArea"]
            },
            attributes: ["id", "titulo", "ubicacion", "duracion", "quehacer", "beneficio", "cantidad", "img"],
            order: [["id", "DESC"]]
        }).then(resultado => res.json(resultado));
    } catch (error) {
        console.log(error)
    }
};
// ORDENAR Tabla Admins VOLUNTARIADOS por ID ASC
export async function mostrarVoluntariadosAsc(req, res) {
    try {
        const resultado = await Voluntariados.findAll({
            include: {
                model: Areas,
                attributes: ["id_area","nombreArea"]
            },
            attributes: ["id", "titulo", "ubicacion", "duracion", "quehacer", "beneficio", "cantidad", "img"],
            order: [["id", "ASC"]]
        }).then(resultado => res.json(resultado));
    } catch (error) {
        console.log(error)
    }
};