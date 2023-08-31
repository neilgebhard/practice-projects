'use server'

import { prisma } from '@/lib/db'
import { auth } from '@clerk/nextjs'
import { Habit } from '@prisma/client'
import { revalidatePath } from 'next/cache'

type HabitProps = Pick<Habit, 'notes' | 'date'>

const createHabit = async ({ notes, date }: HabitProps) => {
  const { userId }: { userId: string | null } = auth()

  if (!userId) return

  await prisma.habit.create({
    data: { notes, date, userId },
  })

  revalidatePath('/habit-tracker')
}

export default createHabit
