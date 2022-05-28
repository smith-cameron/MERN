import React, {useState} from "react";

const Input = (props) => {
    const[color, setColor] = useState("");
    const {colorList, setColorList} = props;
    
    const submitHandler = (event) => {
        event.preventDefault();
        console.log("Adding color"+color);
        setColorList([color, ...colorList]);
        setColor("");
    }
    return(
        <div>
            <h1>Color</h1>
            <div className="App">
                <form onSubmit={(event) => {
                    submitHandler(event)
                }}>
                    {
                        color.length > 0 && color.length < 3 ?
                        <span>Your color must be 3 characters or more.</span>
                        : null
                    }
                    <p>
                    <label>Type in your favorite color:</label>
                    </p>
                    <input 
                    type="text" 
                    name="color"
                    value={color}
                    onChange={(event) => setColor(event.target.value) }
                />
            <button  onClick = {(event) => {
            }}
            style={{marginLeft:"10px"}} type="submit">ADD</button>
            </form>
            </div>
        </div>
    )
}
export default Input