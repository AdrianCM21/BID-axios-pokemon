import React,{useState} from 'react'
import axios from 'axios'

const Pokemon = () => {
    const [pokemon, setPokemon] = useState([])
    const obtener=()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=806&offset=0').then(response=>{
        setPokemon(response.data.results.map(item=>item.name));
        })
    }
  return (
    <div>
        <button className='btn' onClick={obtener}>Fetch Pokemon</button>
        <ul>
            {
                pokemon.map((item,idx)=><li key={idx}>{item}</li>)
            }
        </ul>
    </div>
  )
}

export default Pokemon