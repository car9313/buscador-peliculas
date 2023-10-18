import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import MovieDetails from './pages/MovieDetails'

function App() {
  return (
    <>
      <header className="container">




        <Link to="/">
          <h1>Buscador de Peliculas</h1>
        </Link>
      </header>
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </main>
    </>
  )
}

export default App
