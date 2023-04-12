import { Request, Response } from 'express'
import { DeleteProdutoUseCase } from './DeleteProdutosUseCase'

class DeleteProdutosController {
  async handle(request: Request, response: Response) {
    const { id } = request.params

    const deleteProdutosUseCase = new DeleteProdutoUseCase()

    const produto = await deleteProdutosUseCase.execute(id)

    return response.status(200).json(produto)
  }
}

export { DeleteProdutosController }
