import format from 'pg-format'
import pool from '../../db/config.js'

export const getAllJoyaHateoas = async () => {
  const { rows } = await pool.query('SELECT * FROM inventario')
  return rows
}

export const getJoyaModel = async ({ orderBy = 'precio_ASC', limit = 6, page = 1 }) => {
  const [attribute, direction] = orderBy.split('_')
  const offset = (page - 1) * limit
  const formatQuery = format(
    'SELECT * FROM inventario ORDER BY %s %s LIMIT %s OFFSET %s',
    attribute,
    direction,
    limit,
    offset
  )
  const response = await pool.query(formatQuery)
  return response.rows
}

export const getFiltrarJoyas = async ({ precio_max, precio_min, categoria, metal }) => {
  let query = 'SELECT * FROM inventario WHERE 1=1'
  const values = []
  let paramIndex = 1

  if (precio_max) {
    query += ` AND precio <= $${paramIndex++}`
    values.push(precio_max)
  }
  if (precio_min) {
    query += ` AND precio >= $${paramIndex++}`
    values.push(precio_min)
  }
  if (categoria) {
    query += ` AND categoria = $${paramIndex++}`
    values.push(categoria)
  }
  if (metal) {
    query += ` AND metal = $${paramIndex++}`
    values.push(metal)
  }

  try {
    const { rows } = await pool.query(query, values)
    return rows
  } catch (error) {
    console.error('Error al filtrar joyas en el modelo:', error)
    throw error
  }
}
