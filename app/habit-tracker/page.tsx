import { prisma } from '@/lib/db'
import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import HabitForm from './components/habit-form'
import HabitCalendar from './components/habit-calendar'
import { Separator } from '@/components/ui/separator'

type Props = { searchParams: { date: string } }

const Page = async ({ searchParams }: Props) => {
  let date = new Date(searchParams.date).toLocaleDateString()
  if (date === 'Invalid Date') {
    date = new Date().toLocaleDateString()
  }

  const { userId }: { userId: string | null } = auth()

  if (!userId) redirect('/sign-in')

  let habit = await prisma.habit.findUnique({
    where: { userId_date: { userId, date } },
  })

  return (
    <main className='max-w-5xl mx-auto p-4'>
      <h1 className='text-3xl font-bold'>{date}</h1>
      <p className='text-muted-foreground text-sm'>
        Track your habits for the date
      </p>
      <Separator className='mt-2 mb-5' />
      <div className='flex gap-6'>
        <div className='grow'>
          <HabitForm date={date} initialHabit={habit} />
        </div>
        <div>
          <HabitCalendar />
        </div>
      </div>
    </main>
  )
}

export default Page
