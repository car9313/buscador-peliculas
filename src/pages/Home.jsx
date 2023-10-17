import { useEffect, useState } from 'react'
import { Movies } from '../componentes/Movies'
import { useMovies } from '../hooks/useMovies'
import { useSearch } from '../hooks/useSearch'
import Spinner from '../componentes/Spinner'

const Home = () => {
  const { search, setSearch, error } = useSearch()
  const [sort, setSort] = useState(false)
  const { movies, getMovies, loading, errorFetch } = useMovies({ search, sort })
  const handleSubmit = (e) => {
    e.preventDefault()
    getMovies({ search })
  }
  const handleSearch = (e) => {
    if (e.target.value === ' ') return
    setSearch(e.target.value)
  }
  const handleSort = () => {
    setSort(!sort)
  }
  useEffect(() => {}, [getMovies])
  return (
    <>
      <form action="" className="main__form" onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          id="name"
          value={search}
          onChange={handleSearch}
          className="form__input"
          style={{
            border: '1px solid transparent',
            borderColor: error ? 'red' : 'transparent',
          }}
          placeholder="Iron Man Matrix ..."
        />
        <input type="checkbox" value={sort} onChange={handleSort} />
        <button type="submit">Buscar</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {errorFetch ? (
        <p style={{ color: 'red' }}>{errorFetch}</p>
      ) : loading ? (
        <Spinner />
      ) : (
        <Movies movies={movies} />
      )}
    </>
  )
}
export default Home
