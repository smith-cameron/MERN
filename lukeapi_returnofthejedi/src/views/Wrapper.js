import React, {useState} from 'react'
import { Display, Form } from '../imports';

const Wrapper = () => {    
  const [isError, setIsError] = useState(false);

  return (
    <div className="App">
    <h1 style={{textDecoration:"underline brown"}}>Luke APIwalker</h1>
    
    <Form
    setIsError={setIsError}
    />
    <Display
    isError={isError}
    setIsError={setIsError}
    />
    </div>
    )
  }
  export default Wrapper;
