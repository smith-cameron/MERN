import React, {useState} from "react";
import './App.css';
import Input from "./components/Input"
import Display from "./components/Display"

function App() {
  
  const[colorList, setColorList] = useState([]);
  
  return (
    <div className="App">
      <Input 
      colorList={colorList}
      setColorList={setColorList}/>
      <Display
      colorList={colorList}/>
    </div>
  );
}

export default App;
