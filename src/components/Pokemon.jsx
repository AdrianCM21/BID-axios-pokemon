import React,{useState} from 'react'

const Pokemon = () => {
    const [pokemon, setPokemon] = useState([])
    const obtener=()=>{
        fetch("https://pokeapi.co/api/v2/pokemon?limit=806&offset=0")
            .then(response => {
                return response.json();
            }).then(response => {
                setPokemon(response.results.map(item=>item.name));
            });
    }
  return (
    <div>
        <button className='btn' onClick={obtener}>Mostrar</button>
        <ul>
            {
                pokemon.map((item,idx)=><li key={idx}>{item}</li>)
            }
        </ul>
    </div>
  )
}

export default Pokemon