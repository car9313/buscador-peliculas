import { useCallback, useMemo, useRef, useState } from 'react'
import { searchMovies } from '../services/searchMovies'

export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previewSearch = useRef(search)

  const getMovies = useCallback(async ({ search }) => {
    try {
      console.log('Hola Mundo')
      if (previewSearch.current === search) return
      setLoading(true)
      setError(null)
      previewSearch.current = search
      const newMovies = await searchMovies({ search })
      setMovies(newMovies)
      console.log(error)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }, [])

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])
  return { movies: sortedMovies, getMovies, loading, errorFetch: error }
}
