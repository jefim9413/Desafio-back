import { Router } from 'express'
import { CreateProdutoController } from './modules/useCases/createProduto/CreateProdutoController'

const routes = Router()

const createProdutoController = new CreateProdutoController()

routes.post('/produto', createProdutoController.handle)

export { routes }
