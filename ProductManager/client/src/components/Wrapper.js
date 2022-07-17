import React from 'react';
import {Link} from "react-router-dom"

const Wrapper = () => {        
  return (
    <div>
      <h1 id="header">WRAPPER</h1>
      <br/>
      <Link   id="navLink" to={"/user/new"}>CREATE A USER</Link>
      <br/>
      <Link   id="navLink" to={"/product/new"}>ADD A PRODUCT</Link>
    </div>
    )
  }
  export default Wrapper;