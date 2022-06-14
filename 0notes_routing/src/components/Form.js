import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Form = (props) => {
    const {studentList, setStudentList} = props;
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        setStudentList([...studentList, 
        {
            id:Math.floor(Math.random()*10000).toString(),
            firstName:firstName,
            lastName:lastName,
            email:email,
            password:password
        }])
        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
        navigate("/display")
    }

    
    return (
        <div className="inputForm">
            <form onSubmit={(e) => {submitHandler(e)}}>
                <div className="formGroup">
                    <label htmlFor="firstName">First Name</label>
                    {
                        firstName.length > 0 && firstName.length < 3 ?
                        <span>Your first name must be 3 characters or more.</span>
                        : null
                    }
                    <input
                    type="text" 
                    name="firstName"
                    value={firstName}
                    onChange={ (e) => {
                        // console.log(e); 
                        // console.log(e.target);
                        // console.log(e.target.value);
                        setFirstName(e.target.value)} }/>
                </div>
                <div className="formGroup">
                    <label htmlFor="lastName">Last Name</label>
                    {
                        lastName.length > 0 && lastName.length < 2 ?
                        <span>Your last name must be 2 characters or more.</span>
                        : null
                    }
                    <input 
                    type="text" 
                    name="lastName" 
                    value={lastName}
                    onChange={ (e) => setLastName(e.target.value) }/>
                </div>
                <div className="formGroup">
                    <label htmlFor="email">Email</label>
                    {
                        email.length > 0 && email.length < 6 ?
                        <span>Your email must be 6 characters or more.</span>
                        : null
                    }
                    <input 
                    type="text" 
                    name="email" 
                    value={email}
                    onChange={ (e) => setEmail(e.target.value) }/>
                </div>
                <div className="formGroup">
                    <label htmlFor="password">Password</label>
                    {
                        password.length > 0 && password.length < 8 ?
                        <span>Your password must be 8 characters or more.</span>
                        : null
                    }
                    <input 
                    type="password" 
                    name="password" 
                    value={password}
                    onChange={ (e) => setPassword(e.target.value) }
                    />
                </div>
                <div className="formGroup">
                    <label htmlFor="confirmPassord">Confirm Password</label>
                    {
                        confirmPassword.length > 0 && confirmPassword !== password ?
                        <span>Your passwords must match.</span>
                        : null
                    }
                    <input 
                    type="password" 
                    name="confirmPassword" 
                    value={confirmPassword}
                    onChange={ (e) => setConfirmPassword(e.target.value) }/>
                </div>
            <button 
            onClick = {(event) => {
            }}
            type="submit">SUBMIT</button>
        </form>
    </div>
    )
}

export default Form;