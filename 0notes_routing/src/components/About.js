import React from 'react';
import {Link } from "react-router-dom";
const About = () => {        
  return (
    <div>
      <h1 style={{color: "blue"}}>About Component</h1>
        <Link to={"/"}>Go Home</Link> 
    </div>
      )
  }
  export default About;