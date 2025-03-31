import React, { useEffect, useState } from 'react'
import { getBadgeColor } from '../../utils/utils';
import { getPokemonDetails, getPokemonList } from '../../services/pokemon.service';


export default function Card() {
    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        const fetchPokemonList = async () => {
            try {
                // Obtén la lista de Pokémon (solo nombres y URLs)
                const results = await getPokemonList(150, 0);

                // Obtén los detalles de cada Pokémon
                const detailedPokemonList = await Promise.all(
                    results.map(async (pokemon) => {
                        const details = await getPokemonDetails(pokemon.url);
                        return details;
                    })
                );

                setPokemon(detailedPokemonList);
            } catch (error) {
                console.error('Error fetching Pokémon list:', error);
            }
        };

        fetchPokemonList();
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {pokemon.map((pokemon, index) => (
                <div className="card bg-base-300 w-96 shadow-lg" key={index}>
                    <figure>
                        <img
                            src={pokemon.sprites?.other?.["official-artwork"]?.front_default}
                            alt={pokemon.name}
                            className='w-48 py-2' />
                    </figure>
                    <div className="card-body">
                        <p className='flex justify-center text-xl'>
                            Nº: {pokemon.id < 10 ? `00${pokemon.id}` : pokemon.id < 100 ? `0${pokemon.id}` : `${pokemon.id}`}
                        </p>
                        <h2 className="card-title justify-center text-2xl">
                            {pokemon.name ? pokemon.name.toUpperCase() : '...'}
                        </h2>
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
            ))}
        </div>
    );
}