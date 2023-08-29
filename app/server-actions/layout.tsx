import { Metadata } from 'next'
import Link from 'next/link'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Server Actions',
  description: 'Practicing Next 13 server actions with Prisma',
}

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className='border-b mb-3 px-5 py-2'>
        <Link href='/server-actions' className='font-bold text-xl'>
          Server Actions
        </Link>
      </div>
      <div className='p-5'>{children}</div>
    </>
  )
}

export default Layout
