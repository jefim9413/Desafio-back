import { prisma } from '../../../database/prisma'

interface AtualizarProdutoRequest {
  id: string
  name: string
  description: string
  quantidade: number
}
class AtualizarProdutoUseCase {
  async execute({
    id,
    name,
    description,
    quantidade,
  }: AtualizarProdutoRequest) {
    const produtoExists = await prisma.produto.findFirst({
      where: {
        id,
      },
    })
    if (!produtoExists) {
      throw new Error('Produto não existe')
    }

    const result = await prisma.produto.update({
      where: { id },
      data: {
        name,
        description,
        quantidade,
      },
    })

    return result
  }
}

export { AtualizarProdutoUseCase }
