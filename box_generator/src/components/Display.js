import React, {useState} from "react";

const Display = (props) => {
    const {colorList} = props
    // const boxClass = [
    //     "box"
    // ]
    return(
        <div className="App">
            {
                colorList.map((color, divIndex)=>(
                    <div key={divIndex} 
                    className={"box"} 
                    style={{backgroundColor: color}}>
                        {color}
                    </div>
                ))
            }
        </div>
    )
}
export default Display