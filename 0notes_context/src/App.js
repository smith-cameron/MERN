import React from "react"
import './App.css';
import {StyledBox, SomeOtherComponent, Wrapper} from './imports';
import MyContext from './context';

function App() {
  return (
    <div className="App">
      <MyContext.Provider value={}>
        <Wrapper>
          <StyledBox/>
          <SomeOtherComponent/>
        </Wrapper>
      </MyContext.Provider>
    </div>
  );
}

export default App;