import { Router } from 'express'
import { getAllJoyasHateoas, getFiltrarJoyas, getJoyaController } from '../src/controllers/joyasController.js'

const router = Router()

router.get('/joyas_with_hateoas', getAllJoyasHateoas)
router.get('/joyas_paginado', getJoyaController)
router.get('/joyas/filtros', getFiltrarJoyas)

export default router
