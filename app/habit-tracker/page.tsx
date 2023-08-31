import { prisma } from '@/lib/db'
import { auth } from '@clerk/nextjs'
import Edit from './components/edit'
import Create from './components/create'

type Props = { searchParams: { date: string } }

const Page = async ({ searchParams }: Props) => {
  let date = new Date(searchParams.date).toLocaleDateString()
  if (date === 'Invalid Date') {
    date = new Date().toLocaleDateString()
  }

  const { userId }: { userId: string | null } = auth()

  let habit
  if (userId) {
    habit = await prisma.habit.findUnique({
      where: { userId_date: { userId, date } },
    })
  }

  return (
    <main className='p-4'>
      <Create date={date} initialData={habit} />
    </main>
  )
}

export default Page
