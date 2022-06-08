import React, { useState } from 'react';
import axios from 'axios';

const Form = (props) => {
  const { setCountries} = props;
  const [regSelector, setRegionSelector] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    axios.get(`https://restcountries.com/v2/regionalbloc/${regSelector}`)
      .then((response) => {
        console.log(response);
        console.log(response.data);
        setCountries(response.data)
      })
      .catch((error) => console.log(error))
  }
  return(
    <div>
      <form onSubmit = {submitHandler}>
      <h1 style={{textDecoration:"underline brown"}}>Country App</h1>
        <select
        className="form-control w-25 mx-auto text-center my-3 border border-3"
        onChange = {(e) => setRegionSelector(e.target.value)}
        >
          <option defaultValue >Select a Country Group</option>
          <option value="EU" name="regSelector">European Union</option>
          <option value="EFTA" name="regSelector">European Free Trade Association</option>
          <option value="CARICOM" name="regSelector">Caribbean Community</option>
          <option value="PA" name="regSelector">Pacific Alliance</option>
          <option value="AU" name="regSelector">African Union</option>
          <option value="USAN" name="regSelector">Union of South American Nations</option>
          <option value="EEU" name="regSelector">Eurasian Economic Union</option>
          <option value="AL" name="regSelector">Arab League</option>
          <option value="ASEAN" name="regSelector">Association of Southeast Asian Nations</option>
          <option value="CAIS" name="regSelector">Central American Integration System</option>
          <option value="CEFTA" name="regSelector">Central European Free Trade Agreement</option>
          <option value="NAFTA" name="regSelector">North American Free Trade Agreement</option>
          <option value="SAARC" name="regSelector">South Asian Association for Regional Cooperation</option>
        </select>
        <button type="submit" className="btn btn-primary m-1">Show</button>
      </form>
    </div>
  )

}
export default Form;