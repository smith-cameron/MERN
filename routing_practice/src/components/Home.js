import React from 'react';
import { useParams } from "react-router";

const Home = () => {    
  const { word, color1, color2} = useParams();    
  // const h1Class = []
  return (
    <div>
      {
      word?
      isNaN(word)?
        <h1 style={{color: color1, backgroundColor: color2 }}>The Word is: {word}</h1>
        :<h1 style={{color: color1, backgroundColor: color2 }}>Number is: {word}</h1>
      :<h1>Houston, we have liftoff.</h1>
      }
    </div>
      )
}
export default Home;
