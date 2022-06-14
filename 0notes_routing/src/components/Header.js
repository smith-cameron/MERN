import React from 'react';
import {Link } from "react-router-dom";

const Header = () => {
    
    return (
      <div className='Header'>
        <ul className="nav">
          <li>
            <h1>Routing Example</h1>
          </li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/display"}>Form Results</Link>
          </li>
          <li>
            <Link to={"/form"}>Fill out a form!</Link>
          </li>
        </ul>
        <ul className="nav2">
          <li>
          <Link to="/location/seattle">Seattle</Link>
          </li>
          <li>
          <Link to="/location/chicago">Chicago</Link>
          </li>
          <li>
          <Link to="/location/burbank">Burbank</Link>
          </li>
        </ul>
      </div>
    )
}
export default Header;