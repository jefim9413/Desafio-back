/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `produto` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "produto_name_key" ON "produto"("name");
