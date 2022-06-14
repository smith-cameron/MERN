import React, {useState} from 'react';
import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import{ Home, About, Form, Display, Header, Location } from './imports';

function App() {
  const [ studentList, setStudentList] = useState([]);
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/location/:city" element={<Location />}/>
          <Route path="/about" element={<About />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/form" element={<Form 
              studentList={studentList}
              setStudentList={setStudentList}/>} >
          </Route>
          <Route exact path="/display" element={<Display 
              studentList={studentList}
              setStudentList={setStudentList}/>} >
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
