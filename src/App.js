import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


let adjustInterval = undefined;

function App() {

 

  const [watch, setWatch] = useState(0)
  const[started, setStarted] = useState(false)

  const start = () => {
    adjustInterval = setInterval(() => {
      setWatch((x)=>x+1)
    }, 1000)
    setStarted(true)
  }

  const stop = () => {
    clearInterval(adjustInterval)
    setStarted(false)
  }

  const reset = () => {
setWatch(0)
clearInterval(adjustInterval)

  }

  return (

    <>
      <h1>Start Stop Watch</h1>
      <h1>{watch}</h1>

      <button disabled={started} onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>


    </>
  );
}

export default App;
