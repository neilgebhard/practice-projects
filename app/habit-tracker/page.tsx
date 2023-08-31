import { prisma } from '@/lib/db'
import { auth } from '@clerk/nextjs'
import HabitForm from './components/habit-form'
import { redirect } from 'next/navigation'

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
    <main className='p-4'>
      <HabitForm date={date} initialData={habit} />
    </main>
  )
}

export default Page
