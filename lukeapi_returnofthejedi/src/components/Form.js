import React, {useState} from 'react'
import { useNavigate} from "react-router-dom";

const Form = (props) => {       
  const navigate = useNavigate();
  const [resource, setResource] = useState("");
  const [resourceId, setResourceId] = useState(0);
  const {setIsError} = props;

  const submitHandler = (e) => {
    e.preventDefault();
    setIsError(false);
    navigate(`/${resource}/${resourceId}`);
  } 

  return (
    <div  style={{border: "thin dashed green"}}>
      <form onSubmit = {submitHandler}>
        <select
        className="form-control w-25 mx-auto text-center my-3 border border-3"
        onChange = {(e) => setResource(e.target.value)}>
          <option defaultValue >Select One</option>
          <option value="people" name="resource">People</option>
          <option value="planets" name="resource">Planets</option>
        </select>
        <input type="number" min="1" name="resourceId"
        onChange = {(e) => setResourceId(e.target.value)}/>
        <button type="submit" className="btn btn-primary m-1">Show</button>
      </form>
      {/* <Link to={"/"}>Reset</Link> */}
    </div>
    )
  }
  export default Form;