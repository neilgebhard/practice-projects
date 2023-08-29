'use server'

import { prisma } from '@/lib/db'
import { Thing } from '@prisma/client'
import { revalidatePath } from 'next/cache'

export type ThingFormData = Omit<Thing, 'id'>

const createThing = async ({ content }: ThingFormData) => {
  await prisma.thing.create({
    data: { content },
  })

  revalidatePath('/server-actions')
}

export default createThing
