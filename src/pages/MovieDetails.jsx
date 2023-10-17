import { useEffect, useState } from 'react'
import './MovieDetails.css'
import { getMovie } from '../services/getMovie'
import { useParams } from 'react-router-dom'
import Spinner from '../componentes/Spinner'

const useGetMovie = (id) => {
  const [movie, setMovie] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setIsLoading(true)
    ;(async () => {
      const newMovie = await getMovie({ id })
      console.log(isLoading)
      setIsLoading(false)
      setMovie(newMovie)
    })()
  }, [id])

  return { movie, isLoading }
}
const MovieDetails = () => {
  const { id } = useParams()
  const { movie, isLoading } = useGetMovie(id)
  if (isLoading) {
    return <Spinner />
  }
  return (
    <>
      {movie && (
        <div className="details">
          <img className="card__poster" src={movie.Poster} alt={movie.title} />
          <div className="details__text">
            <p>Títulosdgdsgd: {movie.Title}</p>
            <p>Año: {movie.Year}</p>
            <p>Lanzamiento: {movie.Released}</p>
            <p>Genero: {movie.Genre}</p>
            <p>Actores: {movie.Actors}</p>
            <p>Pais: {movie.Country}</p>
            <p>Premios: {movie.Awards}</p>
          </div>
        </div>
      )}
    </>
  )
}
export default MovieDetails
