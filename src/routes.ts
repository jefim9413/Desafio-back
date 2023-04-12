import { Router } from 'express'
import { CreateProdutoController } from './modules/useCases/createProduto/CreateProdutoController'
import { ListarProdutosController } from './modules/useCases/listarProdutos/ListarProdutosController'

const routes = Router()

const createProdutoController = new CreateProdutoController()
const listarProdutosController = new ListarProdutosController()

routes.post('/produto', createProdutoController.handle)
routes.get('/produto', listarProdutosController.handle)

export { routes }
