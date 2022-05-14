import React from "react";
import PersonCard from "./components/PropsCo";
import "./App.css";

function App() {
  const people = [
    {
      lastName : "Robinson",
      firstName : "Joel",
      age : 53,
      hair : "dark brown"
    },
    {
      lastName : "Robot",
      firstName : "Crow T.",
      age : 31,
      hair : "none"
    },
    {
      lastName : "Servo", 
      firstName : "Tom", 
      age : 31, 
      hair : "none"
    },
    {
      lastName : "Frank",
      firstName : "TV's",
      age : 55,
      hair : "white"
    }
  ];
  return (
    <div className="App">
      {
        people.map((object, index) =>(
          <PersonCard key = {index}
          lastName = {object.lastName}
          firstName = {object.firstName}
          age = {object.age}
          hair = {object.hair}
          />
        ))
      }
    </div>
  );
}

export default App;