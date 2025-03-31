import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from '../../components/Card/Card';
import { Link } from 'react-router-dom';

export const API_URL = import.meta.env.VITE_BACK_URL

export default function HomePage() {
  const [pokemon, setPokemon] = useState({})

  useEffect(() => {
    axios.get(`${API_URL}/pokemon/gengar`)
      .then(response => setPokemon(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className='p-12 w-full h-full'>
      <div className='flex justify-center items-center'>
        {/* <img src="/assets/Pokeball.png" alt="" className='w-16 mr-6' /> */}
        <h2 className='text-5xl'>Pokédex</h2>
      </div>
      <div className='p-6'>
        <button>Boton</button>
        seach
      </div>
      <div className='grid grid-cols-4 justify-center'>
        <Link to='/pokemonDetail/1'>
          <Card />
        </Link>
      </div>
    </div>
  )
}
