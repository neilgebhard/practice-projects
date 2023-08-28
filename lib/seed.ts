import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.thing.create({
    data: {
      content: 'Hello!',
    },
  })
}

main()
