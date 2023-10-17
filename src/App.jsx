
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import MovieDetails from './pages/MovieDetails'



function App() {
  return (
    <>
      <header className='container'>
        <h1>Buscador de Peliculas</h1>
      </header>
      <main className='container'>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/movie/:id' element={<MovieDetails />} />

        </Routes>
      </main >
    </>
  )
}

export default App
