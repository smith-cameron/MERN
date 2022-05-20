import React, {useContext} from "react";
import Context from '../context';

const Form = () => {    
  const context = useContext(Context);   
  return (
    <div>
      <form className="inputForm">
        <div className="formGroup">
          <label>Your Name: </label>
          {
            context.user.length > 0 && context.user.length < 3 ?
            <span>Your name must be 3 characters or more.</span>
            : null
          }
          <input
          
          type="text"
          name="user"
          value={context.user}
          onChange={ (e) => context.setUser(e.target.value) }/>
        </div>
      </form>
    </div>
    )
}
export default Form;