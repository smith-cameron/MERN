import React, { useState} from 'react';

const Component = () => {
    // const [text, setText] = useState("");
    // const myFunction =()=>{
        // setText(" Cameron")
        // console.log(text)
    // }
    // myFunction()

    // const [state, setState] = useState({
    //     items: [],
    //     totalPrice: 0.00
    // });
    // const myFunction = () => {
    //     setState({ items: state.items, totalPrice: state.totalPrice + 10.99 });
    //     console.log(state.items);
        
    // }
    // myFunction()

    const [arr, setArr] = useState([]);
    for(let i=1; i<=5; i++) {
        setArr(arr.push(i));
    }
    console.log(arr);

    return (
        <div>
            <h1>Hello World</h1>
        </div>
    )
}
export default Component;
