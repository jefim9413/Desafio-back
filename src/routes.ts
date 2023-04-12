import { Router } from 'express'
import { CreateProdutoController } from './modules/useCases/createProduto/CreateProdutoController'
import { ListarProdutosController } from './modules/useCases/listarProdutos/ListarProdutosController'
import { DeleteProdutosController } from './modules/useCases/deleteProduto/DeleteProdutosController'

const routes = Router()

const createProdutoController = new CreateProdutoController()
const listarProdutosController = new ListarProdutosController()
const deleteProdutosUseCase = new DeleteProdutosController()

routes.post('/produto', createProdutoController.handle)
routes.get('/produto', listarProdutosController.handle)
routes.delete('/produto/:id', deleteProdutosUseCase.handle)

export { routes }
