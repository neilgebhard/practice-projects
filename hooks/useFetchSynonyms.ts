import { fetchSynonyms } from '@/actions/fetchSynonyms'
import { useEffect, useState } from 'react'
import type { Synonym } from '@/app/fetch/page'

export const useFetchSynonyms = (word: string) => {
  const [loading, setLoading] = useState(false)
  const [synonyms, setSynonyms] = useState<Synonym[] | null>()
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(false)
        setLoading(true)
        const fetchedSynonyms = await fetchSynonyms(word)
        setSynonyms(fetchedSynonyms)
      } catch (e) {
        console.error(e)
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [word])

  return { loading, synonyms, error }
}
