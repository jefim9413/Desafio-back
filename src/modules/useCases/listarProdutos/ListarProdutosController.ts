import { Request, Response } from 'express'
import { ListarProdutoUseCase } from './ListarProdutoUseCase'

class ListarProdutosController {
  async handle(request: Request, response: Response) {
    const listarProdutosUseCase = new ListarProdutoUseCase()

    const produtos = await listarProdutosUseCase.execute()

    return response.json(produtos)
  }
}

export { ListarProdutosController }
