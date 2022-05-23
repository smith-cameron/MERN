import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios';
import errorPic from '../images/these-arent-the-droids-youre-looking-for.jpg'

const Display = (props) => {  
  const [selectedResource, setSelectedResource] = useState({});
  const {resourceParam, resourceIdParam} = useParams();
  const {isError, setIsError} = props;
  
  useEffect(() => {
    axios.get(`https://swapi.dev/api/${resourceParam}/${resourceIdParam}`)
      .then((response) => {
        setIsError(false);
        console.log(response);
        console.log(response.data);
        setSelectedResource(response.data)
      })
      .catch((error) => {
      console.log(error);
      setIsError(true);
      });
  },[resourceParam, resourceIdParam]);

  const displayHandler = ()=>{
    if(resourceParam === "people"){
      return (
        <div>
          <h4>Height: {selectedResource.height}</h4>
          <h4>Hair Color: {selectedResource.hair_color}</h4>
          <h4>Eye Color: {selectedResource.eye_color}</h4>
          <h4>Skin Color: {selectedResource.skin_color}</h4>
        </div>
      )
    }
    else if(resourceParam === "planets"){
      return (
        <div>
          <h4>Climate: {selectedResource.climate}</h4>
          <h4>Terrain: {selectedResource.terrain}</h4>
          <h4>Surface Water: {selectedResource.surface_water}</h4>
          <h4>Population: {selectedResource.population}</h4>
        </div>
      )
    }
  }
  return (
    <div style={{border: "thin dashed orange"}}>
      {
        selectedResource?
        <div>
          <h1>{selectedResource.name}</h1>
          {
          displayHandler()
          }
        </div>
        :null
      }
      {
        isError?
        <div>
        <img
        src={errorPic}
        alt="ERRORPIC"
      />
      </div>
        :null
      }
    </div>
    )
  }
  export default Display;
