import HATEOAS from '../helpers/hateoas.js'
import { getAllJoyaHateoas, getJoyaModel, getFiltrarJoyas as getFiltrarJoyasModel } from '../models/joyasModel.js'

export const getAllJoyasHateoas = async (req, res) => {
  try {
    const inventarioData = await getAllJoyaHateoas()
    const allInventarioWithHateoas = await HATEOAS('joyas', inventarioData)
    res.status(200).json({ inventario: allInventarioWithHateoas })
  } catch (error) {
    console.error('Error al procesar la solicitud (getJoyaController):', error)
    res.status(500).json({ error: 'Error interno del servidor', message: error.message })
  }
}

export const getJoyaController = async (req, res) => {
  try {
    const { orderBy, limit, page } = req.query
    const inventario = await getJoyaModel({ orderBy, limit, page })
    res.status(200).json({ inventario })
  } catch (error) {
    console.error('Error al procesar la solicitud (getAllJoyasHateoas):', error)
    res.status(500).json({ error: 'Error interno del servidor', message: error.message })
  }
}

export const getFiltrarJoyas = async (req, res) => {
  try {
    const filtros = req.query
    const filtrarData = await getFiltrarJoyasModel(filtros)
    res.status(200).json({ joyas: filtrarData })
  } catch (error) {
    console.error('Error al procesar la solicitud (getFiltrarJoyas):', error)
    res.status(500).json({ error: 'Error interno del servidor', message: error.message })
  }
}
