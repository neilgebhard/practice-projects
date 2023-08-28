const BASE_URL = 'https://api.datamuse.com'

export const fetchSynonyms = async (word: string) => {
  const res = await fetch(`${BASE_URL}/words?rel_syn=${word}`)
  return res.json()
}
