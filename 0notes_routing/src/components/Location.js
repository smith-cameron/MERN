import React from 'react';
import { useParams } from "react-router";

const Location = (props) => {
  const { city } = useParams();
    return (
      <div >
        <h1 style={{color: "Green"}}>{city} component loaded!</h1>
      </div>
    )
}
export default Location;