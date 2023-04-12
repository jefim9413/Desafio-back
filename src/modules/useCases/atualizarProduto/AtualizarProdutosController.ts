import { Request, Response } from 'express'
import { AtualizarProdutoUseCase } from './AtualizarProdutosUseCase'

class AtualizarProdutosController {
  async handle(request: Request, response: Response) {
    const { id } = request.params
    const { name, description, quantidade } = request.body

    const atualizarProdutoUseCase = new AtualizarProdutoUseCase()

    const produto = await atualizarProdutoUseCase.execute({
      id,
      name,
      description,
      quantidade,
    })

    return response.json(produto)
  }
}

export { AtualizarProdutosController }
