import React,{useState} from 'react'
import '../App.css';

const Display = (props) => {         
  const {objList} = props
  // const [toggle, setToggle] = useState(false);


  return (
    <div>
      <h1 className="title">Pokemons:</h1>
      {
        objList.map((pokemon, index)=>(
        <h2 key={index} className="cats">{index+1}: {pokemon.name}</h2>
        ))
      }
      
      {/* {
        toggle === false?
        <button onClick={()=>setToggle(!toggle)}>Get all pokemon names</button>
        :<button onClick={()=>setToggle(!toggle)}>Close name display</button>
      }
      {
        toggle?
        objList.map((pokemon, index)=>(
          <h2 key={index} className="cats">{index+1}: {pokemon.name}</h2>
        ))
        :null
      } */}
    </div>
      )
  }
  export default Display;