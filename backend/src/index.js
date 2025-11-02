import express from 'express'
import cors from 'cors'
import Rotas from './rotas.js'

const servidor = express()
servidor.use(express.json())
servidor.use(cors())

Rotas(servidor)

servidor.listen(1569, () => console.log("TUDO CERTO"))