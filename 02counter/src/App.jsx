import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)

  //let counter = 5

  const addValue = () => {
    //counter = counter + 1;
    setCounter(counter + 1);
  }

  const removeValue = () => {
    setCounter(counter - 1);
  }

  /*
  const alert = () => {
    if (counter <= 0) {
      alert("Value is going negative");
    }
  }

  alert();
*/

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter value: {counter} </h2>

      <button onClick={addValue} >Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>

      <p>Footer: {counter}</p>
    </>
  )
}

export default App
