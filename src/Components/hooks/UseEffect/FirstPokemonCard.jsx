
import { useState, useEffect } from "react";
import "./Pokemon.css";


export const FirstPokemonCard = () => {
    const [pokemon, setPokemon] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const API = "https://pokeapi.co/api/v2/pokemon/pikachu"

    // const fetchPokemon = () => {
    //     fetch(API)
    //     .then((res) => res.json())
    //     .then((data)=>{
    //         setPokemon(data);
    //         setLoading(false);
    //     }).catch((error) => {
    //         console.log(error);
    //         setError(error);
    //         setLoading(false);
    //     });
    // }

    const fetchPokemon = async () => {
        try{
            const response = await fetch(API);
            const data = await response.json();
            setPokemon(data);
            setLoading(false);
        }catch(error){
            console.log(error);
            setError(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchPokemon();
    },[]);

    if(loading){
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }

    if(error){
        return (
            <div>
                <h1>Error: {error.message}</h1>
            </div>
        )
    }


    if(pokemon){
        return (
            <section className="container effect-container">
                <header>
                    <h1>
                        Lets catch  Pokemon
                    </h1>
                </header>
                <ul className="card-demo">
                    <li className="pokemon-card">
                        <figure>
                            <img src={ pokemon.sprites.other.dream_world.front_default } alt={pokemon.name} className="pokemon-image" />
                        </figure>
                        <h1>{ pokemon.name }</h1>
                        <div className="grid-three-cols">
                            <p className="pokemon-info"> Height: <span>{ pokemon.height }</span></p>
                            <p className="pokemon-info"> Weight: <span>{ pokemon.weight }</span></p>
                            <p className="pokemon-info"> Speed: <span>{ pokemon.stats[5].base_stat }</span></p>
                        </div>
                    </li>
                </ul>
            </section>
        );
    }
   
}