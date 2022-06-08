import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const DisplayAll = (props) => {
  const {countries, setCountries} = props;
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const ratingHandler = (e, country) => {
    country.rating = e.target.value;
    setRating(e.target.value);
  }
  const reviewHandler = (e, thisCountry) => {
    let countriesCopy = countries.map((ctry) => {
      if(ctry === thisCountry){
        let tempCountry = {...thisCountry};
        tempCountry.review = e.target.value;
        console.log(tempCountry);
        setReview(e.target.value);
        return tempCountry;
      }else{
        return ctry;
      }
    })
    setCountries(countriesCopy);
  }
  const paramsHandler = (country)=>{
    if(country.rating && country.review){
      return(
        <Link className="card-title border py-3 bg-secondary text-light fw-bold" 
        to={`/country/${country.alpha2Code}/${country.rating}/${country.review}`}> {country.alpha3Code}</Link>
      )
    }
    else if(country.rating){
      return(
        <Link className="card-title border py-3 bg-secondary text-light fw-bold" 
        to={`/country/${country.alpha2Code}/${country.rating}`}> {country.alpha3Code}</Link>
      )
    }
    else{
      return(
        <Link className="card-title border py-3 bg-secondary text-light fw-bold" 
        to={`/country/${country.alpha2Code}`}> {country.alpha3Code}</Link>
      )
    }
  }
  return(
    <div className="d-flex p-2 bd-highlight flex-wrap border w-75 mx-auto justify-content-around">
      {
        countries.map((country, index) => (
          <div className="card m-2 w-10 rounded" key={index}>
            <h4 className="m-2" style={{textDecoration:"underline brown"}}>{country.name}</h4>
            {
              paramsHandler(country)
            }
            {/* <Link className="card-title border py-3 bg-secondary text-light fw-bold" to={`/country/${country.alpha2Code}`}> {country.alpha3Code}</Link> */}
            <input type="number" placeholder="Rate" min="0" max="5"
            className='form-control mx-auto text-center my-3 border border-3 p-2'
            onChange={(e) => ratingHandler(e, country)}/>
            <img style={{objectFit: "cover", height: "100px", width:"150px", margin:"auto"}} src={country.flag} alt="country flag"/>
            {
              country.rating?
              <div>
                <label htmlFor="review">Review? (Optional)</label>
                <textarea 
                className="form-control mx-auto text-center my-3  border border-3 fixed-bottom w-50"
                placeholder={`${country.name} Review`}
                type="text"
                onChange={(e) => reviewHandler(e, country)}/>
              </div>
              :null
            }
          </div>
        ))
      }
    </div>
  )

}
export default DisplayAll;

//d-flex p-2 bd-highlight flex-wrap border w-75 mx-auto justify-content-around