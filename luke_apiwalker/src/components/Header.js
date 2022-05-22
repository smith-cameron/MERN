import React from 'react';
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';

const Header = (props) => { 
  const {setThing, thingSelector, setThingSelector, whichSelector, setWhichSelector, setIsError} = props;
  const navigate = useNavigate()
  

  const submitHandler = (e) => {
    e.preventDefault();
    axios.get(`https://swapi.dev/api/${thingSelector}/${whichSelector}`)
      .then((response) => {
        setIsError(false);
        console.log(response);
        console.log(response.data);
        setThing(response.data)
        navigate(`/${thingSelector}/${whichSelector}`)
      })
      .catch((error) => {
      console.log(error);
      setIsError(true);
      });
  }
  

  return (
    <div  style={{border: "thin dashed green"}}>
      <form onSubmit = {submitHandler}>
        <select
        className="form-control w-25 mx-auto text-center my-3 border border-3"
        onChange = {(e) => setThingSelector(e.target.value)}>
          <option defaultValue >Select One</option>
          <option value="people" name="thingSelector">People</option>
          <option value="planets" name="thingSelector">Planets</option>
        </select>
        <input type="number" min="1" name="whichSelector"
        onChange = {(e) => setWhichSelector(e.target.value)}/>
        <button type="submit" className="btn btn-primary m-1">Show</button>
      </form>
      <Link to={"/"}>Reset</Link>
    </div>
    )
  }
  export default Header;
