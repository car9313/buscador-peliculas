import { FaSearch } from 'react-icons/fa'
import { FaSortAlphaDown } from 'react-icons/fa'
import { useMovies } from '../hooks/useMovies'
import { useSearch } from '../hooks/useSearch'
import Spinner from './Spinner'
import { Movies } from './Movies'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '../hooks/useQuery'
// eslint-disable-next-line react/prop-types
const Search = () => {
  const { search, setSearch, error } = useSearch()
  const [sort, setSort] = useState(false)
  const { movies, getMovies, loading, errorFetch } = useMovies({ search, sort })
  const navigate = useNavigate()
  const query = useQuery().get('search')

  useEffect(() => {
    setSearch(query || '')
  }, [query])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Submit')
    getMovies({ search })
    navigate(`/?search=${search}`)
  }

  const handleSearch = (e) => {
    if (e.target.value === ' ') return
    setSearch(e.target.value)
  }
  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <>
      <form className="main__search" onSubmit={handleSubmit}>
        <div className="search__box">
          {<input type="checkbox" className='search__checked' id='sort' value={sort} onChange={handleSort} />}
          <label htmlFor="sort" className='search__sort'>
            <FaSortAlphaDown color='black' />
          </label>
          <input
            type="text"
            name=""
            id="name"
            value={search}
            onChange={handleSearch}
            className="search__input"
            style={{
              border: '1px solid transparent',
              borderColor: error ? 'red' : 'transparent',
            }}
            placeholder="Iron Man Matrix ..."
          />
          <button type="submit" className="search__button">
            <FaSearch />
          </button>
        </div>
      </form>
      {error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : errorFetch ? (
        <p style={{ color: 'red' }}>{errorFetch}</p>
      ) : loading ? (
        <Spinner />
      ) : (
        <Movies movies={movies} />
      )}
    </>
  )
}

export default Search
