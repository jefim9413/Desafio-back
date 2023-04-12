import { Request, Response } from 'express'
import { CreateProdutoUseCase } from './CreateProdutoUseCase'

class CreateProdutoController {
  async handle(request: Request, response: Response) {
    const { name, description, quantidade } = request.body

    const createprodutoUseCase = new CreateProdutoUseCase()

    const produto = await createprodutoUseCase.execute({
      name,
      description,
      quantidade,
    })

    return response.json(produto)
  }
}

export { CreateProdutoController }
