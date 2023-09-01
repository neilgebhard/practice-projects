'use server'

import { prisma } from '@/lib/db'
import { auth } from '@clerk/nextjs'
import { Habit } from '@prisma/client'
import { revalidatePath } from 'next/cache'

export type HabitProps = Pick<
  Habit,
  | 'date'
  | 'notes'
  | 'exercised'
  | 'practicedProperNutrition'
  | 'sleptWell'
  | 'learned'
  | 'avoidedAlcohol'
  | 'avoidedSmoking'
  | 'socialized'
  | 'limitedScreenTime'
  | 'read'
  | 'expressedGratitude'
  | 'meditated'
  | 'actedWithKindness'
  | 'practicedPersonalHygiene'
  | 'journaled'
>

const createHabit = async ({
  notes,
  date,
  exercised,
  practicedProperNutrition,
  sleptWell,
  learned,
  avoidedAlcohol,
  avoidedSmoking,
  socialized,
  limitedScreenTime,
  read,
  expressedGratitude,
  meditated,
  actedWithKindness,
  practicedPersonalHygiene,
  journaled,
}: HabitProps) => {
  const { userId }: { userId: string | null } = auth()

  if (!userId) return

  await prisma.habit.create({
    data: {
      userId,
      notes,
      date,
      exercised,
      practicedProperNutrition,
      sleptWell,
      learned,
      avoidedAlcohol,
      avoidedSmoking,
      socialized,
      limitedScreenTime,
      read,
      expressedGratitude,
      meditated,
      actedWithKindness,
      practicedPersonalHygiene,
      journaled,
    },
  })

  revalidatePath('/habit-tracker')
}

export default createHabit
