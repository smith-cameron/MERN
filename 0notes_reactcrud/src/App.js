import React, {useState} from 'react';
import './App.css';
import{ Header, Form, Display, Footer } from './imports';

function App() {
  const [ studentList, setStudentList] = useState([]);
  const [activeTheme, setActiveTheme] = useState(0);
  const themeMode = [
    {
      style:"day",
      text:"day mode"
    },
    {
      style:"sepia",
      text:"sepia mode"
    },
    {
      style:"night",
      text:"night mode"
    }
  ]

  return (
    <div className={themeMode[activeTheme].style}>
      <Header/>
      <Form
      studentList={studentList}
      setStudentList={setStudentList}/>
      <Display
      studentList={studentList}
      setStudentList={setStudentList}/>
      <Footer
      activeTheme={activeTheme}
      setActiveTheme={setActiveTheme}
      themeMode={themeMode}/>
    </div>
  );
}

export default App;
