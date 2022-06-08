import React, { useState } from 'react';
import '../App.css';
import { Form, DisplayAll } from '../imports';

const Wrapper = () => {
  const [countries, setCountries] = useState([]);

  return(
    <div>
      <Form
      countries={countries}
      setCountries={setCountries}/>
      <DisplayAll
      countries={countries}
      setCountries={setCountries}/>
    </div>
  )

}
export default Wrapper;