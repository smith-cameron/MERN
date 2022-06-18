import React, { useContext } from "react";
import StyledBox from './StyledBox';
import MyContext from '../context';

const SomeOtherComponent = (props) => {
    const context = useContext(MyContext);
    return(
        <div>
            <StyledBox bgColor="blue"/>
            <StyledBox  bgColor="red" height="200px"/>
            <h1>Hello {context}</h1>
        </div>

    )
}

export default SomeOtherComponent;