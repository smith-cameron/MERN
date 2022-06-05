import React, {useState} from 'react'
import '../App.css';

const Display = (props) => {         
  const {planet, planetNum, setPlanetNum, residents} = props
  const [toggle, setToggle] = useState(false);

  const planetNext = ()=>{
    if(planetNum === 60){
      setPlanetNum(1)
    }
    else{
      setPlanetNum(planetNum+1)
    }
  }
  const planetPrevious = ()=>{
    if(planetNum === 1){
      setPlanetNum(60)
    }
    else{
      setPlanetNum(planetNum-1)
    }
  }

  return (
    <div>
      <h1 className="title">Name: {planet.name}</h1>
      <h2 className="cats">Climate: {planet.climate}</h2>
      <h2 className="cats">Terrain: {planet.terrain}</h2>
      <h2 className="cats">Population: {planet.population}</h2>
      <h2 className="cats">Suface Water: {planet.surface_water}%</h2>
      <h2 className="cats">Diameter: {planet.diameter} miles</h2>
      <h2 className="cats">Rotation Period: {planet.rotation_period} hours</h2>
      <h2 className="cats">Orbit Period: {planet.orbital_period} days</h2>
      <h2 className="cats">Gravity: {planet.gravity}</h2>
      <div>
        <button onClick={planetPrevious}>Previous</button>
        <button onClick={()=>setToggle(!toggle)}>Get a famous person.</button>
        <button onClick={planetNext}>Next</button>
      </div>
      <div>
        {
          residents && toggle?
          <h2>Main Resident: {residents.name}</h2>
          :null
        }
      </div>
    </div>
      )
  }
  export default Display;