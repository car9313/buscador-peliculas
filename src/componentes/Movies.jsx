import { CardMovie } from "./CardMovie"

export function Movies({ movies }) {
    const hasMovies = movies?.length > 0
    return (
        <>
            {
                hasMovies ?
                    (<div className='main__cards'>
                        {
                            (movies.map(movie =>
                            (
                                <CardMovie key={movie.id} movie={movie} />
                            )
                            )
                            )
                        }
                    </div>)
                    : <p>No hay peliculas</p>
            }
        </>
    )
}
