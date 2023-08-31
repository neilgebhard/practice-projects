import { prisma } from '@/lib/db'

const Page = async ({
  params: { thingId },
}: {
  params: { thingId: string }
}) => {
  const thing = await prisma.thing.findUnique({
    where: {
      id: thingId,
    },
  })

  return <pre>{JSON.stringify(thing, null, 2)}</pre>
}

export default Page
