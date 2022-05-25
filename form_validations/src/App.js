import React, {useState} from 'react';
import './App.css';
import{ Header, Form, Display } from './imports';

function App() {
  const [ studentList, setStudentList] = useState([]);

  return (
    <div className="App">
      <Header/>
      <Form
      studentList={studentList}
      setStudentList={setStudentList}/>
      <Display
      studentList={studentList}/>
    </div>
  );
}

export default App;
