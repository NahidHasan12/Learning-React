
import { useEffect, useState } from "react";
import { PokemonCards } from "./PokemonCard";

import "./Pokemon.css";

export const Pokemon = () => {

    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState("");

    const API = "https://pokeapi.co/api/v2/pokemon?limit=100";

    const fetchPokemon = async () => {
        try{
            const response = await fetch(API);
            const data = await response.json();
            console.log(data);

            const detailedPokemon = data.results.map( async (curPokemon) => {
                const response = await fetch(curPokemon.url);
                const  data = await response.json();
                return data;
            });
            // console.log(detailedPokemon);

            const detailedResponses = await Promise.all(detailedPokemon);
            console.log(detailedResponses);
            setPokemon(detailedResponses);
            setLoading(false);

        }catch(error){
            console.log(error);
            setLoading(false);
            setError(error);
        }
    }

    useEffect(() => {
        fetchPokemon();
    }, []);

    // Search Functionality
    const searchData = pokemon.filter((curPokemon) => 
        curPokemon.name.toLowerCase().includes(search.toLocaleLowerCase())
    );



    if(loading){
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }

    if(error){
        return (
            <div>
                <h1>{ error.message }</h1>
            </div>
        );
    }

    return (
        <>
        <section className="container">
            <header>
                <h1>Hello Pokemon Once Again</h1>
            </header>
            <div className="pokemon-search">
                <input type="text" placeholder="search pokemon" value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
            <div>
                <ul className="cards">
                    {
                        searchData.map( (curPokemon) => {
                            return (
                                <PokemonCards key={curPokemon.id} pokemonData={curPokemon} />
                            )
                        })
                    }
                </ul>
            </div>
        </section>
        </>
    );
}