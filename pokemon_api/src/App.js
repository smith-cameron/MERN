import React, {useEffect, useState} from 'react'
import './App.css';
import {Display} from './imports'
import axios from 'axios'

function App() {
  const [objList, setObjList] = useState([])

  useEffect(()=>{
    axios
    .get('https://pokeapi.co/api/v2/pokemon?limit=898')
    .then((res) => {
      setObjList(res.data.results)
      // return res.data
    })
    // .then((res) => {
    //   setObjList(res.results)

    // })
    .catch((err) => console.log(err))
  }, [])

  return (
    <div className="App">
      <Display
      objList={objList}/>
    </div>
  );
}

export default App;
