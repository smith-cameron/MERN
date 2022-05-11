import React, {useState} from 'react';
import './App.css';
import Tab from './Components/Tab';
import Body from './Components/Body';



function App() {
  const [tabList] = useState([
    {
    "title":"Tab 1",
    "content":"This is Tab1 Content..."
    },
    {
      "title":"Tab 2",
      "content":"This is Tab2 Content..."
    },
    {
      "title":"Tab 3",
      "content":"This is Tab3 Content..."
    },
    {
      "title":"Tab 4",
      "content":"This is Tab4 Content..."
    }
  ]);
  
  const [showIdx, setIdx] = useState(0);
  return (
    <div className="App">
      <Tab
      tabList = { tabList }
      showIdx = { showIdx }
      setIdx = { setIdx }/>
      <Body
      tabList = { tabList }
      showIdx = { showIdx }/>
    </div>
  );
}

export default App;
