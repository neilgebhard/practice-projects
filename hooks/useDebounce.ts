import { useEffect, useState } from 'react'

const useDebounce = (word: string, delay: number = 1000) => {
  const [debouncedWord, setDebouncedWord] = useState('')

  useEffect(() => {
    const id = setTimeout(() => {
      setDebouncedWord(word)
    }, delay)

    return () => {
      clearTimeout(id)
    }
  }, [word, delay])

  return { debouncedWord, setDebouncedWord }
}

export default useDebounce
