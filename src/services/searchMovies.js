const API_KEY = '70289c0e'
export const searchMovies = async ({ search }) => {
    if (search === '') return null
    try {
        const res = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${search}`)
        const json = await res.json()
        const moviesSearch = json?.Search
        return moviesSearch?.map(movie => ({
            title: movie.Title,
            id: movie.imdbID,
            poster: movie.Poster
        }))
    } catch (e) {
        throw new Error('Error buscando las películas')
    }
}
