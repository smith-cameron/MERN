import React, {useEffect, useState} from 'react'
import './App.css';
import {Display} from './imports'
import axios from 'axios'

function App() {
  const [planet, setPlanet] = useState({})
  const [planetNum, setPlanetNum] = useState(1);
  const [peopleLink, setPeopleLink] = useState([]);
  const [residents, setResidents] = useState({});

  // useEffect(()=>{
  // fetch(`https://swapi.dev/api/planets/${planetNum}`)
  // .then((result) =>{
  //   console.log(result);
  //   return result.json();
  // })
  // .then((result) => {
  //   console.log(result);
  //   setPlanet(result)
  // })
  // .catch((err) => console.log(err))
  // }, [planetNum])

  useEffect(()=>{
    axios.get(`https://swapi.dev/api/planets/${planetNum}`)
    .then((result) => {
      console.log(result.data);
      setPlanet(result.data)
      setPeopleLink(result.data.residents[0])
    })
    .catch((err) => console.log(err))
    }, [planetNum])
  
  useEffect(()=>{
    if(peopleLink){
      axios.get(peopleLink)
      .then((result)=>{
        console.log(result);
        // console.log(result.data);
        setResidents(result.data);
      })
      .catch((err) => console.log(err))
    }
    else{
      setPeopleLink("")
    }
  }, [peopleLink])

  return (
    <div className="App">
      <Display
      planet={planet}
      planetNum={planetNum}
      setPlanetNum={setPlanetNum}
      residents={residents}/>
    </div>
  );
}

export default App;