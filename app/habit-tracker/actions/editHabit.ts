'use server'

import { prisma } from '@/lib/db'
import { auth } from '@clerk/nextjs'
import { Habit } from '@prisma/client'
import { revalidatePath } from 'next/cache'

type HabitProps = Pick<Habit, 'notes' | 'date'>

const editHabit = async ({ notes, date }: HabitProps) => {
  const { userId }: { userId: string | null } = auth()

  if (!userId) return

  await prisma.habit.update({
    data: { notes },
    where: {
      userId_date: {
        userId,
        date,
      },
    },
  })

  revalidatePath('/habit-tracker')
}

export default editHabit
