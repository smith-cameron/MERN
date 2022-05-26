import './App.css';
import FirstComponent from './components/FirstComponent';

function App() {
  return (
    <div className="App">
      <h1>Hello Dojo</h1>
      <FirstComponent someText={"Hello World"}/>
      <FirstComponent someText={"How Are You?"}/>
      <h2>Things I need to do:</h2>
        <ul>
            <li>Learn React</li>
            <li>Climb Mnt Everest</li>
            <li>Run a Marathon</li>
            <li>Feed the dogs</li>
        </ul>
    </div>
  );
}

export default App;
