import React from "react";
import {StyledBox, SomeOtherComponent} from '../imports';

const Wrapper = (props) => {


  
  return(
    <div style={{border:"dashed thin red"}}>
      <h1>Wrapper</h1>
      <StyledBox/>
      <SomeOtherComponent/>
      some text
      {props.children}
    </div>

  )
}


export default Wrapper;