import React from 'react';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import{ Wrapper } from './imports';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Wrapper />} />
          <Route path="/:resourceParam/:resourceIdParam" element={<Wrapper/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
