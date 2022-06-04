import './App.css';
// import Profile from './components/Profile';
// import Track from './components/Track';
import Component from './components/Notes';

function App() {
  return (
    <div className="App">
      {/* <Profile/>
      <div style = { {display: "inline-block", width: "400px" } }>
        <Track trackTitle={"Python"}/>
        <Track trackTitle={"Java"}/>
        <Track trackTitle={"Web Fun"}/>
        <Track trackTitle={"Mern"}/>
      </div> */}
      <Component/>
    </div>
  );
}

export default App;
