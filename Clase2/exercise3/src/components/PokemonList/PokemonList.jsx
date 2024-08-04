import { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios";
import { Card, Container, PokemonImage, PokemonName, PokemonTitle } from './styles';

function PokemonList() {
    const [datapokemon, setDataPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getPokemon = async () => {
            try {
                const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=105');
                const { results } = response.data;
                const pokemonConDetails = results.map((pokemon) => axios.get(pokemon.url));
                const data = await Promise.all(pokemonConDetails);
                setDataPokemon(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        getPokemon();
    }, []);

    return (
        <>
            <PokemonTitle>Pokemon</PokemonTitle>
            {loading && <p>Cargando...</p> && <img src='https://st3.depositphotos.com/6723736/12729/v/450/depositphotos_127297230-stock-illustration-download-sign-load-icon-load.jpg' alt='imagen' />}
            {error && <p>{error.message}</p>}
            <Container>
                {datapokemon.map((pokemon) => (
                    <Card key={pokemon.data.id}>
                        <PokemonImage src={pokemon.data.sprites.front_default} alt={pokemon.data.name} />
                        <PokemonName>{pokemon.data.name}</PokemonName>
                    </Card>
                ))}
            </Container>
        </>
    )
}
export default PokemonList