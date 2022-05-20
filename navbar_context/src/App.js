import React, {useState} from "react"
import './App.css';
import {Wrapper} from './imports';
import Context from './context';

function App() {
  
  const [user, setUser] = useState("");
  
  return (
    <div className="App">
      <Context.Provider value={{user, setUser}}>
      <Wrapper/>
      </Context.Provider>
    </div>
  );
}

export default App;
