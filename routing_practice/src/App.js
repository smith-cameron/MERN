import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Wrapper } from './imports';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Wrapper />}/>
          <Route path="/home" element={<Home />}/>
          <Route exact path="/:word" element={<Home />}/>
          <Route exact path="/:word/:color1/:color2" element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
