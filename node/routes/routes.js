import express from 'express'
import { actualizarblogs, createblogs, eliminarblogs, getAllblogs, getblog } from '../controllers/blogController.js'



const routes = express.Router()

routes.get('/', getAllblogs)
routes.get('/:id', getblog)
routes.post('/', createblogs)
routes.put('/:id', actualizarblogs )
routes.delete('/:id', eliminarblogs )

export default routes;
