import axios from 'axios';

const baseURL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5173";

// Obtiene la lista de Pokémon (solo nombres y URLs)
export const getPokemonList = async (limit = 50, offset = 0) => {
    try {
        const response = await axios.get(`${baseURL}/?limit=${limit}&offset=${offset}`);
        return response.data.results; // Devuelve solo la lista de resultados
    } catch (error) {
        console.error('Error fetching Pokémon list:', error);
        throw error;
    }
};

// Obtiene los detalles de un Pokémon específico
export const getPokemonDetails = async (url) => {
    try {
        const response = await axios.get(url);
        return response.data; // Devuelve los detalles del Pokémon
    } catch (error) {
        console.error('Error fetching Pokémon details:', error);
        throw error;
    }
};