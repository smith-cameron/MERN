import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from "axios";

const DisplayOne = (props) => {
  const {countryCode, rating, review} = useParams();
  const [country, setCountry] = useState([])
  useEffect(() => {
    axios.get(`https://restcountries.com/v2/alpha/${countryCode}`)
      .then((result) =>{
        console.log(result);
        console.log(result.data);
        setCountry(result.data)
      })
      .catch((error) => console.log(error))
  }, [countryCode])
  return(
    <div >
      <h1 style={{textDecoration:"underline brown"}}>{country.name}</h1>
      <p>Native Name: {country.nativeName}</p>
      <p>Capital: {country.capital}</p>
      <p>Region: {country.region}</p>
      <p>Subregion: {country.subregion}</p>
      <p>Population: {country.population}</p>
      {
        rating?
        <p>Thank you for your rating of {rating}</p>
        :null
      }
      {
        review?
        <p>Your review: {review}</p>
        :null
      }
    </div>
  )

}
export default DisplayOne;