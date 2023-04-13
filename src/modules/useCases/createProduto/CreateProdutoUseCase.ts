import { prisma } from '../../../database/prisma'
interface CreateProdutoRequest {
  name: string
  description: string
  quantidade: number
}
class CreateProdutoUseCase {
  async execute({ name, description, quantidade }: CreateProdutoRequest) {
    const produtoExists = await prisma.produto.findFirst({
      where: {
        name,
      },
    })
    if (produtoExists) {
      throw new Error('Produto já existe')
    }

    const produto = await prisma.produto.create({
      data: {
        name,
        description,
        quantidade,
      },
    })
    return produto
  }
}

export { CreateProdutoUseCase }
