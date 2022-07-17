import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom"
import axios from 'axios';

const UserForm = () => {  
  // Getters & Setters
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");
  const [profileImage, setProfileImage] = useState("");
  // useNavigate() for redirect
  const navigate = useNavigate();
  // State for handling validation erros from model
  const [errors, setErrors] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/users",
    {
      firstName,
      lastName,
      email,
      age,
      gender,
      profileImage,
    })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        navigate("/");
      })
      // Validations 
      .catch((err) => {
        console.log(err)
        console.log("err.response:", err.response);
        console.log("err.response.data:", err.response.data);
        console.log("err.response.data.error.errors:", err.response.data.error.errors);
        // Above should be err.response.data.errors. Why does response come back in different structure?
        setErrors(err.response.data.error.errors);
      });
  }
  
  return (
    <>
      <h1 id="header">Add a User</h1>
      <Link  id="navLink" to={"/"}>Return Home</Link>
      <form onSubmit={submitHandler}>
          <div className="formGroup">
            <label>First Name:</label>
            <input className="formInput" value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text"/>
            {
              errors.firstName?
              <span className='errorDisplay'>{errors.firstName.message}</span>
              :null
            }
          </div>
          <div className="formGroup">
            <label>Last Name:</label>
            <input className="formInput" value={lastName} onChange={(e) => setLastName(e.target.value)} type="text"/>
            {
              errors.lastName?
              <span className='errorDisplay'>{errors.lastName.message}</span>
              :null
            }
          </div>
          <div className="formGroup">
            <label>Email:</label>
            <input className="formInput" value={email} onChange={(e) => setEmail(e.target.value)} type="text"/>
            {
              errors.email?
              <span className='errorDisplay'>{errors.email.message}</span>
              :null
            }
          </div>
          <div className="formGroup">
            <label>Age:</label>
            <input className="formInput" value={age} onChange={(e) => setAge(e.target.valueAsNumber)} type="number"/>
            {
              errors.age?
              <span className='errorDisplay'>{errors.age.message}</span>
              :null
            }
          </div>
          <div className="formGroup">
            <label>Gender</label>
            <select className="formInput" value={gender} name="gender" onChange={(e) => setGender(e.target.value)}>
              <option defaultValue hidden>Select A Gender:</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value="Other">Other</option>
              <option value="Undeclared">Undeclared</option>
            </select>
            {
              errors.gender?
              <span className='errorDisplay'>{errors.gender.message}</span>
              :null
            }
          </div>
          <div className="formGroup">
            <label>Profile Image:</label>
            <input className="formInput" value={profileImage} onChange={(e) => setProfileImage(e.target.value)} type="text"/>
          </div>
          <button>Submit</button>
      </form>
    </>
    )
  }
  export default UserForm;