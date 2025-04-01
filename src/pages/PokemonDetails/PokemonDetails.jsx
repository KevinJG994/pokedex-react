import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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
    <div className="pokemon-details">
      <h1 className="text-4xl font-bold">{pokemon.name.toUpperCase()}</h1>
      <img
        src={pokemon.sprites?.other?.['official-artwork']?.front_default}
        alt={pokemon.name}
        className="w-64 mx-auto"
      />
      <p className="text-xl">ID: #{pokemon.id}</p>
      <p className="text-xl">Height: {pokemon.height}</p>
      <p className="text-xl">Weight: {pokemon.weight}</p>
      <div className="types">
        <h2 className="text-2xl font-semibold">Types:</h2>
        {pokemon.types.map((type, index) => (
          <span key={index} className="badge badge-primary mx-1">
            {type.type.name.toUpperCase()}
          </span>
        ))}
      </div>
    </div>
  );
}