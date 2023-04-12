import { prisma } from '../../../database/prisma'

class DeleteProdutoUseCase {
  async execute(id: string) {
    const produto = await prisma.produto.findFirst({
      where: {
        id,
      },
    })

    if (!produto) {
      throw new Error('produto não encontrado')
    }

    await prisma.produto.delete({ where: { id } })
  }
}

export { DeleteProdutoUseCase }
