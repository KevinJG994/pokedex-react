import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { getBadgeColor } from '../../utils/utils';

export default function PokemonDetails() {
  const { pokemonId } = useParams(); // Obtén el ID desde la URL
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        setPokemon(response.data);
      } catch (error) {
        console.error('Error fetching Pokémon details:', error);
      }
    };

    fetchPokemonDetails();
  }, [pokemonId]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-12 w-full h-full">
      <Link to='/' className='flex'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-left-icon lucide-move-left"><path d="M6 8L2 12L6 16" /><path d="M2 12H22" /></svg>
        <p className='mx-2'>Back</p>
      </Link>
      <div className='flex justify-around'>
        <p className="text-xl">Nº: {pokemon.id < 10 ? `00${pokemon.id}` : pokemon.id < 100 ? `0${pokemon.id}` : `${pokemon.id}`}</p>
        <h1 className="text-4xl font-bold">{pokemon.name.toUpperCase()}</h1>
      </div>

      <div className='flex justify-around'>
        <div className="flex flex-col justify-center items-center h-full">
          <div className="card w-96 bg-base-100 card-md shadow-sm my-6">
            <div className="card-body bg-(--red-primary) rounded-t-md">
              <h2 className="card-title text-xl text-gray-50">Height</h2>
            </div>
            <p className="flex justify-end text-lg p-6">{(pokemon.height / 10).toFixed(1).replace('.', ',')} m</p>
          </div>

          <div className="card w-96 bg-base-100 card-md shadow-sm my-6">
            <div className="card-body bg-(--red-primary) rounded-t-md">
              <h2 className="card-title text-xl text-gray-50">Weight</h2>
            </div>
            <p className="flex justify-end text-lg p-6">{(pokemon.weight / 10).toFixed(1).replace('.', ',')} kg</p>
          </div>

          <button className="btn bg-(--red-primary) text-(--white-primary)" onClick={() => document.getElementById('my_modal_2').showModal()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-no-axes-combined-icon lucide-chart-no-axes-combined"><path d="M12 16v5" /><path d="M16 14v7" /><path d="M20 10v11" /><path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15" /><path d="M4 18v3" /><path d="M8 14v7" /></svg>
            View Stats
          </button>
          <dialog id="my_modal_2" className="modal">
            <div className="modal-box">
              <h2 className="card-title text-xl font-bold">Stats</h2>
              <div className="card bg-base-100 card-md shadow-sm m-8 mx-auto">
                <div className="card-body">
                  {pokemon.stats?.map((statObj, index) => (
                    <div key={index} className="flex items-center">
                      {/* Tipo de stat */}
                      <span className="text-lg font-medium w-32">{statObj.stat.name.toUpperCase()}</span>

                      {/* Barra de progreso */}
                      <progress
                        className="progress progress-primary w-56"
                        value={statObj.base_stat}
                        max="200"
                      ></progress>

                      {/* Valor del stat */}
                      <span className="text-lg font-medium ml-4">{statObj.base_stat}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </div>

        <div className='flex-col justify-center items-center'>
          <img
            src={pokemon.sprites?.other?.['official-artwork']?.front_default}
            alt={pokemon.name}
            className="w-96 mx-auto"
          />

          <div className="card-actions justify-center my-4">
            {pokemon.types ? (
              pokemon.types.map((t, index) => (
                <div key={index} className={`badge ${getBadgeColor(t.type.name)}`}>
                  {t.type.name.toUpperCase()}
                </div>
              ))
            ) : (
              '...'
            )}
          </div>
        </div>
      </div>
    </div >
  );
}