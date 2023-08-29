'use client'

import createThingWithoutFormData from '@/actions/createThingWithoutFormData'
import { Thing } from '@prisma/client'
import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

type Props = {
  things: Thing[]
}

const Client = ({ things }: Props) => {
  const [content, setContent] = useState('')

  const searchParams = useSearchParams()
  const name = searchParams.get('name')

  return (
    <>
      {name && <div>{name}</div>}
      <ul>
        {things.map((thing) => (
          <li key={thing.id}>
            <a href={`/server-actions/${thing.id}`}>{thing.content}</a>
          </li>
        ))}
      </ul>
      <form
        action={async (formData: FormData) => {
          const content = formData.get('content') as string
          if (!content) return
          createThingWithoutFormData({ content })
          setContent('')
        }}
      >
        <label htmlFor='content-input'>Content</label>
        <Input
          id='content-input'
          className='border'
          value={content}
          onChange={(e) => setContent(e.target.value)}
          name='content'
        />
        <Button>Submit</Button>
      </form>
    </>
  )
}

export default Client
