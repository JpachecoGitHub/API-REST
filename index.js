import express from 'express'
import 'dotenv/config'
import joyasRouter from './router/joyasRoutes.js'
import { inventarioLog } from './middleware/logMiddleware.js'

const app = express()
const PORT = process.env.PORT ?? 5000

app.use(express.json())

app.use(inventarioLog)

app.use('/api', joyasRouter)

app.listen(PORT, console.log(`servidor 🔥 http://localhost:${PORT}`))
