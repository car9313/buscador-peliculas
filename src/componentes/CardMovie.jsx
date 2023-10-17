import { Link, Router } from "react-router-dom"
import './CardMovie.css'
export const CardMovie = ({ movie }) => {
    return (

        <Link className='main__card' to={`movie/${movie.id}`}>
            <li  >
                <h5 >{movie.title}</h5>
                <img className='card__poster' src={movie.poster} alt={movie.title} />
            </li>

        </Link>


    )
}