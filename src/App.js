import {useState} from "react"
import './App.css';

function App() {
  const [display,setDisplay] = useState()
  const handleClick=async()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>setDisplay(json))
  
  }
  return (
    <div className="App">
     <button onClick={handleClick}>Get Data</button>
     {display && display.map((item,id)=>{
      return(
        <p key={id}>{item.title}</p>
      )
     })}
    </div>
  );
}

export default App;