import { useEffect, useRef, useState } from 'react'
export function useSearch() {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstSearch = useRef(true)
  useEffect(() => {
    if (isFirstSearch.current) {
      isFirstSearch.current = search === ''
      return
    }
    if (search === '') {
      setError('No se puede buscar una película vacía')
      return
    }
    if (search.length < 3) {
      setError('Debe insertar como minimo 3 caracteres')
      return
    }
    setError(null)
  }, [search])
  return { search, setSearch, error }
}
