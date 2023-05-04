import sequelize from "sequelize";
import { Areas } from "../app/models/Areas.js"
import { Voluntariados } from "../app/models/Voluntariados.js"

// MOSTRAR TOP AREAS
// Traer la cantidad de administradores y clientes
export const topAreas = async (req, res) => {
    try {
      //Se buscan todas las Areas y se le eligen los atributos
      const resultado = await Areas.findAll({
        attributes: [
          'id_area',
          'nombreArea',
          [sequelize.fn('count', sequelize.fn('DISTINCT', sequelize.col('voluntariados.id'))), 'cantidad']
        ],
        // Incluimos la tabla voluntariados
        include: [
          {
            model: Voluntariados,
            attributes: [],
            // Omitir los campos de la tabla intermedia
            through: { attributes: [] } 
          }
        ],
        //Los agrupamos por id de area y su nombre
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
      //Se buscan todas las Areas y se le eligen los atributos
      const resultado = await Areas.findAll({
        attributes: [
          'id_area',
          'nombreArea',
          [sequelize.fn('count', sequelize.fn('DISTINCT', sequelize.col('voluntariados.id'))), 'cantidad']
        ],
        // Incluimos la tabla voluntariados
        include: [
          {
            model: Voluntariados,
            attributes: [],
            through: { attributes: [] } // Omitir los campos de la tabla intermedia
          }
        ],
        //Los agrupamos por id de area y su nombre
        group: [
          'Areas.id_area',
          'Areas.nombreArea'
        ],
        //Los odenamos de forma DESC
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
      //Se buscan todas las Areas y se le eligen los atributos
      const resultado = await Areas.findAll({
        attributes: [
          'id_area',
          'nombreArea',
          [sequelize.fn('count', sequelize.fn('DISTINCT', sequelize.col('voluntariados.id'))), 'cantidad']
        ],
        // Incluimos la tabla voluntariados
        include: [
          {
            model: Voluntariados,
            attributes: [],
            // Omitir los campos de la tabla intermedia
            through: { attributes: [] } 
          }
        ],
        //Los agrupamos por id de area y su nombre
        group: [
          'Areas.id_area',
          'Areas.nombreArea'
        ],
        //Los odenamos de forma ASC
        order: [
          [sequelize.literal('cantidad'), 'ASC']
        ]
      });
      res.json(resultado);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
};