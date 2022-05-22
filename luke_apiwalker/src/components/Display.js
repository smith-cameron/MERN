import React from 'react';
import { useParams } from "react-router";
import errorPic from '../images/these-arent-the-droids-youre-looking-for.jpg'

const Display = (props) => {       
  const {thing, isError} = props; 
  const { thingParam } = useParams();

  
  const displayHandler = ()=>{
    if(thingParam === "people"){
      return (
        <div>
          <h4>Height: {thing.height}</h4>
          <h4>Hair Color: {thing.hair_color}</h4>
          <h4>Eye Color: {thing.eye_color}</h4>
          <h4>Skin Color: {thing.skin_color}</h4>
        </div>
      )
    }
    else if(thingParam === "planets"){
      return (
        <div>
          <h4>Climate: {thing.climate}</h4>
          <h4>Terrain: {thing.terrain}</h4>
          <h4>Surface Water: {thing.surface_water}</h4>
          <h4>Population: {thing.population}</h4>
        </div>
      )
    }
    
  }
  return (
    <div style={{border: "thin dashed orange"}}>
      {
        !isError?
        thing?
        <div>
          <h1>{thing.name}</h1>
          {
          displayHandler()
          }
        </div>
        :null
        :<div>
          <img
          src={errorPic}
          alt="ERRORPIC"
        />
        </div>
      }
    </div>
    )
  }
  export default Display;
