import React from 'react';

const Footer = (props) => {
  const {activeTheme, setActiveTheme, themeMode} = props;
  const styleThemeMode ={
      display: "inline-flex",
      justifyContent: "space-around",
      alignItems: "center",
      margin: "20px 90% 0 10px"
  }
  const themeHandler = (activeTheme) => {
    if(activeTheme === 0){
      return(
        <div >
        <input onClick={() => setActiveTheme(1)} name="theme" type="radio" style={{width:"fit-content"}}/>
        <label style={{margin:"0 15px 0 5px"}}>Sepia Mode</label>
        <input onClick={() => setActiveTheme(2)} name="theme" type="radio" style={{width:"fit-content"}}/>
        <label style={{margin:"0 15px 0 5px"}}>Dark Mode</label>
      </div>
      )
    }
    else if(activeTheme === 1){
      return(
        <div>
          <input onClick={() => setActiveTheme(0)} name="theme" type="radio" style={{width:"fit-content"}}/>
          <label style={{margin:"0 15px 0 5px"}}>Light Mode</label>
          <input onClick={() => setActiveTheme(2)} name="theme" type="radio" style={{width:"fit-content"}}/>
          <label style={{margin:"0 15px 0 5px"}}>Dark Mode</label>
        </div>
      )
    }
    else{
      return(
        <div>
          <input onClick={() => setActiveTheme(0)} name="theme" type="radio" style={{width:"fit-content"}}/>
          <label style={{margin:"0 15px 0 5px"}}>Light Mode</label>
          <input onClick={() => setActiveTheme(1)} name="theme" type="radio" style={{width:"fit-content"}}/>
          <label style={{margin:"0 15px 0 5px"}}>Sepia Mode</label>
        </div>
      )
    }
  }

  return (
    // **********Comented code only displays the un-checked display options
    //            Currently it leaves the posional check-box checked even though the actual 
    //              value for that checkbox position has changed.
    <div>
      {
        themeHandler(activeTheme)
      }
    </div>

    // <div>
    //   <input onClick={() => setActiveTheme(0)} name="theme" type="radio" style={{width:"fit-content"}}/>
    //   <label style={{margin:"0 15px 0 5px"}}>Day Mode</label>
    //   <input onClick={() => setActiveTheme(1)} name="theme" type="radio" style={{width:"fit-content"}}/>
    //   <label style={{margin:"0 15px 0 5px"}}>Sepia Mode</label>
    //   <input onClick={() => setActiveTheme(2)} name="theme" type="radio" style={{width:"fit-content"}}/>
    //   <label style={{margin:"0 15px 0 5px"}}>Night Mode</label>
    // </div>


    // <div>
    //   <input onClick={(e) => clickHandler(e)} name="theme" type="radio" style={{width:"fit-content"}}/>
    //   <label style={{margin:"0 15px 0 5px"}}>Day Mode</label>
    //   <input onClick={(e) => clickHandler(e)} name="theme" type="radio" style={{width:"fit-content"}}/>
    //   <label style={{margin:"0 15px 0 5px"}}>Sepia Mode</label>
    //   <input onClick={(e) => clickHandler(e)} name="theme" type="radio" style={{width:"fit-content"}}/>
    //   <label style={{margin:"0 15px 0 5px"}}>Night Mode</label>
    // </div>
  )
}
export default Footer;