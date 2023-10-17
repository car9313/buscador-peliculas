const API_KEY = '70289c0e'
export const getMovie = async ({ id }) => {
    if (id === '') return null
    try {
        const res = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`)
        const data = await res.json()
        return data
    } catch (e) {
        throw new Error('Error buscando la película')
    }
}
