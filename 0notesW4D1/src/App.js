import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DisplayOne, Wrapper } from './imports';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Wrapper/>}/>
          <Route path="/country/:countryCode" element={<DisplayOne/>}/>
          <Route path="/country/:countryCode/:rating" element={<DisplayOne/>}/>
          <Route path="/country/:countryCode/:rating/:review" element={<DisplayOne/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
