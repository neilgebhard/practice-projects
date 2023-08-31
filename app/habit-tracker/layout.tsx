import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className='border-b'>
        <div className='flex items-center p-4 h-16'>
          <Link href='/habit-tracker' className='text-xl font-bold'>
            Habit Tracker
          </Link>
          <div className='ml-auto'>
            <UserButton afterSignOutUrl='/' />
          </div>
        </div>
      </div>
      {children}
    </>
  )
}

export default Layout
