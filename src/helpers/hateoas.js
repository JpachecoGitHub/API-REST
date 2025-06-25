import 'dotenv/config'

const HATEOAS = (entity, data) => {
  const PORT = process.env.PORT ?? 5000

  const results = data.map((item) => {
    return {
      name: item.nombre,
      href: `http://localhost:${PORT}/api/${entity}/${item.id}`
    }
  }).slice(0, 6)

  const total = data.length
  const dataWithHateoas = {
    total,
    results
  }
  return dataWithHateoas
}

export default HATEOAS
