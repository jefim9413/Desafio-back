import { prisma } from '../../../database/prisma'

class ListarProdutoUseCase {
  async execute() {
    const produtos = await prisma.produto.findMany()

    return produtos
  }
}

export { ListarProdutoUseCase }
