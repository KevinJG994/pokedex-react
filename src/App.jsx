import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import HomePage from './pages/HomePage/HomePage'
import PokemonDetails from './pages/PokemonDetails/PokemonDetails'

function App() {

  return (
    <div className='h-full'>
      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/pokemonDetail/:idPokemon' element={<PokemonDetails />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
