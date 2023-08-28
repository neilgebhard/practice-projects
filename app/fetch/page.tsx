'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import useDebounce from '@/hooks/useDebounce'
import { useFetchSynonyms } from '@/hooks/useFetchSynonyms'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useState } from 'react'
import { BeatLoader } from 'react-spinners'

export type Synonym = {
  word: string
  score: number
}

const Page = () => {
  const [word, setWord] = useState('')
  const { debouncedWord, setDebouncedWord } = useDebounce(word)
  const { loading, synonyms, error } = useFetchSynonyms(debouncedWord)

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const newWord = e.target.elements.word.value
    setWord(newWord)
  }

  return (
    <main className='bg-neutral-100 min-h-screen'>
      <div className='max-w-5xl mx-auto p-8 '>
        <h1 className='font-bold text-2xl mb-5'>Thesaurus</h1>
        <p>
          <Link
            className='text-blue-600 hover:underline'
            href='https://www.datamuse.com/api/'
          >
            datamuse API
          </Link>
          , useDebounce, fetch, fetch hook, fetch action
        </p>
        <form className='space-y-2 mt-5' onSubmit={handleSubmit}>
          <Label htmlFor='word-input'>Word</Label>
          <div className='flex items-center gap-3'>
            <Input
              id='word-input'
              className='text-xl px-3 py-5'
              placeholder='Type in a word'
              name='word'
              onChange={(e) => setWord(e.target.value)}
              value={word}
            />
            <Button>Submit</Button>
          </div>
        </form>
        <p className='mt-10 mb-2 text-4xl font-bold'>{word}</p>
        {error && <p className='text-red-500'>There&apos;s been an error.</p>}
        {loading ? (
          <BeatLoader color='#3F3F3F' />
        ) : (
          <div className='bg-white p-5'>
            <div className='flex flex-wrap gap-2'>
              {synonyms?.map((synonym, i) => (
                <Button
                  className={cn(
                    synonym.score > 1000
                      ? 'bg-green-600 hover:bg-green-500'
                      : synonym.score > 100
                      ? 'bg-orange-600 hover:bg-orange-500'
                      : 'bg-red-700 hover:bg-red-500'
                  )}
                  key={synonym.word}
                  onClick={() => setWord(synonym.word)}
                >
                  {synonym.word}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}

export default Page
