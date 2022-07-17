import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom"
import axios from 'axios';

const ProductForm = () => { 
  const [title, setTitle] = useState("");   
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");  

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  // // Is it bad practice to have free floating onChange conditional not in  a function?
  // // i think so becasue it re prints after every change of state. Can i stack onChange methods?
  // if (title.length > 0 && title.length < 3) {
  //   console.log("**Title Length Must Be 3 Characters or More**")
  //   // can i use above errors object to display in current form error spans below?
  //   // Need to destructure and add to errors(setErrors()) {title: {message:""},price: {message:""}, description: {message:""}} etc.... per conditional statement
  // } if (title.length > 50){
    
  //   console.log("**Title Length Must Be Less Than 50 Characters**")
  // }
  // if (description.length > 0 && description.length < 2) {
  //   console.log("**Description Length Must Be 2 Characters or More**")
  // }
  // if (description.length > 200){
    
  //   console.log("**Description Length Must Be Less Than 200 Characters**")
  // }
  // // console.log("onChange(title) check:",title);
  // // console.log("onChange(price) check:",price);
  // // console.log("onChange(dec) check:",description);

  
  const submitHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/products",
    {
      title,
      price,
      description
    })
    .then((res) => {
      console.log(res);
      console.log(res.data);
      navigate("/new");
    })
    // Validations 
      .catch((err) => {
        console.log(err)
        console.log("err.response:", err.response);
        console.log("err.response.data:", err.response.data);
        console.log("err.response.data.errors:", err.response.data.error.errors);
        // Above should be err.response.data.errors. Why does response come back in different structure?
        setErrors(err.response.data.error.errors);
      });
  }
  return (
    <>
      <h1 id="header">ProductForm</h1>
      <Link  id="navLink" to={"/"}>Return Home</Link>
      <form onSubmit={submitHandler}>
          <div className="formGroup">
            <label>Title:</label>
            <input className="formInput" value={title} onChange={(e) => setTitle(e.target.value)} type="text"/>
            {
              errors.title?
              <span className='errorDisplay'>{errors.title.message}</span>
              :null
            }
          </div>
          <div className="formGroup">
            <label>Price:</label>
            <input className="formInput" value={price} onChange={(e) => setPrice(e.target.valueAsNumber)} type="number"/>
            {
              errors.price?
              <span className='errorDisplay'>{errors.price.message}</span>
              :null
            }
          </div>
          <div className="formGroup">
            <label>Decription:</label>
            <input className="formInput" value={description} onChange={(e) => setDescription(e.target.value)} type="text"/>
            {
              errors.description?
              <span className='errorDisplay'>{errors.description.message}</span>
              :null
            }
          </div>
          <button>Submit</button>
      </form>
    </>
    )
  }
  export default ProductForm;