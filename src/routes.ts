import { Router } from 'express'
import { CreateProdutoController } from './modules/useCases/createProduto/CreateProdutoController'
import { ListarProdutosController } from './modules/useCases/listarProdutos/ListarProdutosController'
import { DeleteProdutosController } from './modules/useCases/deleteProduto/DeleteProdutosController'
import { AtualizarProdutosController } from './modules/useCases/atualizarProduto/AtualizarProdutosController'

const routes = Router()

const createProdutoController = new CreateProdutoController()
const listarProdutosController = new ListarProdutosController()
const deleteProdutosUseCase = new DeleteProdutosController()
const atualizarProdutosController = new AtualizarProdutosController()

routes.post('/produto', createProdutoController.handle)
routes.get('/produto', listarProdutosController.handle)
routes.delete('/produto/:id', deleteProdutosUseCase.handle)
routes.put('/produto/:id', atualizarProdutosController.handle)

export { routes }
