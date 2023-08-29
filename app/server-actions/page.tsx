import { prisma } from '@/lib/db'
import Client from './client'

const Page = async () => {
  const things = await prisma.thing.findMany()

  return (
    <div>
      <Client things={things} />
    </div>
  )
}

export default Page
