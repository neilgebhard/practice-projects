'use server'

import { prisma } from '@/lib/db'
import { revalidatePath } from 'next/cache'

const createThing = async (formData: FormData) => {
  const content = formData.get('content') as string

  await prisma.thing.create({
    data: { content },
  })

  revalidatePath('/server-actions')
}

export default createThing
