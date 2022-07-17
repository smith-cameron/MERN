import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import{ProductForm, Wrapper, UserForm} from './imports';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route element={<Wrapper/>} path="/"/>
          <Route element={<ProductForm/>} path="/product/new"/>
          <Route element={<UserForm/>} path="/user/new"/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
