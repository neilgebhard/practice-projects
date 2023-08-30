import Link from 'next/link'

const links = [
  {
    href: '/fetch',
    label: 'Fetch',
  },
  {
    href: '/circles',
    label: 'Circles',
  },
  {
    href: '/server-actions',
    label: 'Server Actions',
  },
  {
    href: '/habit-tracker',
    label: 'Habit Tracker',
  },
]

export default function Home() {
  return (
    <>
      <header className='border-b'>
        <div className='max-w-7xl mx-auto p-3 flex items-center'>
          <Link href='/' className='text-xl font-bold'>
            Practice Projects
          </Link>
          <nav className='ml-8'>
            <ul className='flex gap-5'>
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className='font-semibold hover:underline'
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <main className='max-w-7xl mx-auto p-3'>
        <h1 className='text-2xl font-bold'>Home</h1>
      </main>
    </>
  )
}
