import { useEffect, useState } from "react"
import styles from "./styles.module.scss"
import { PokemonType } from "../../types/PokemonType"
import { useNavigate } from "react-router-dom"



interface iProps {
    fetchPokemonList : () => Promise<PokemonType[]>
}

export default function Dashboard ({fetchPokemonList} : iProps) {
        const navigate = useNavigate()

    const [pokemons,setPokemons] = useState<PokemonType[]>([])


    function handleNavigate(id:number){
        navigate(`/pokemon-detail/${id}`)

    }

    useEffect(() => {
        (async() =>{

            const data = await fetchPokemonList()
            setPokemons(data)

        })()
       
    },[])
return(
    <div className={styles.container}>
        <h1>Dashboard</h1>

        <ul className={styles["container-pokemons"]}>
            {pokemons.map((pokemon) => (
                <li key={pokemon.id}  onClick={() => handleNavigate(pokemon.id)}   >
                    <h2>{pokemon.name}</h2>
                    <img src={pokemon.image} alt={pokemon.name}/>
                    <strong>{pokemon.type}</strong>
                </li>
            ))}
            
        </ul>

    </div>
)
}