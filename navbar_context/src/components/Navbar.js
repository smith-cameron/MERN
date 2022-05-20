import React, {useContext} from "react";
import Context from '../context';

const Navbar = () => {   
  const context = useContext(Context);       
  return (
    <div className="Header">
      <h1 className="nav">Hello {context.user}</h1>
    </div>
    )
}
export default Navbar;