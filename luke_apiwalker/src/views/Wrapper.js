import React, { useState } from 'react';
import{ Display, Header } from '../imports';

const Wrapper = () => {   
  const [thing, setThing] = useState([]) 
  const [thingSelector, setThingSelector] = useState("");    
  const [whichSelector, setWhichSelector] = useState(0);
  const [isError, setIsError] = useState(false)

  return (
    <div className="App">
      <h1 style={{textDecoration:"underline brown"}}>Luke APIwalker</h1>
      <Header 
      thingSelector={thingSelector}
      setThingSelector={setThingSelector}
      whichSelector={whichSelector}
      setWhichSelector={setWhichSelector}
      setThing={setThing}
      setIsError={setIsError}
      />
      {
        thing?
        <Display 
        thing={thing}
        isError={isError}
        />
        :null
      }
    </div>
    )
  }
  export default Wrapper;
