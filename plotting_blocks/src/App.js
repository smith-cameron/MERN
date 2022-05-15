import React from 'react';
import './App.css';
import{ Header, Navigation, Main, Subcontent, Advertisement} from './compImports';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Main 
        subcontent = {<Subcontent/>}
        ad = {<Advertisement />}/>
    </div>
  );
}

export default App;
