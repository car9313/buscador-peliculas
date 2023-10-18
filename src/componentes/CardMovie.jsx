import { Link, Router } from "react-router-dom"
import './CardMovie.css'
export const CardMovie = ({ movie }) => {
    return (
        <>
            <Link to={`movie/${movie.id}`}>
                <div className='card'>

                    <b>

                        <img className='card__poster' src={movie.poster} alt={movie.title} />
                    </b>
                    <div className="content">
                        <p className="title">{movie.title}</p>
                    </div>
                </div>
            </Link>
        </>



    )
}