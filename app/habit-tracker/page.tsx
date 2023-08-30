import { prisma } from '@/lib/db'
import { auth } from '@clerk/nextjs'
import Edit from './components/edit'
import Create from './components/create'

const getDate = () => new Date().toLocaleDateString()

type Props = { searchParams: { date: string } }

const Page = async ({ searchParams }: Props) => {
  let date = new Date(searchParams.date).toLocaleDateString()
  if (date === 'Invalid Date') {
    date = getDate()
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
      {habit ? <Edit /> : <Create />}
      {/* <div>{date}</div>
      <pre>{JSON.stringify(searchParams, null, 2)}</pre>
      <pre>{JSON.stringify(habit, null, 2)}</pre>
      <pre>{JSON.stringify(userId, null, 2)}</pre> */}
    </main>
  )
}

export default Page
