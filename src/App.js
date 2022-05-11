import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  
  const [inputNumber, setInputNumber] = useState(1)
  const [answer, setAnswer] = useState("")

  const handleNumberInc = () => {
    setInputNumber(inputNumber + 1)
  }


  useEffect(() => {
    if (inputNumber % 3 === 0 && inputNumber % 5 === 0) {
      setAnswer("fizzbuzz")
    } else if (inputNumber % 3 === 0) {
      setAnswer("fizz")
    } else if (inputNumber % 5 === 0) {
      setAnswer("buzz")
    } else {
      setAnswer(inputNumber);
    }
  }, [inputNumber,])


  return (
    <>
    <button value={inputNumber} onClick={handleNumberInc}>Add Number</button>
    <h2>Number is {inputNumber}</h2>
    <h2>It's {answer}</h2>
    </>
  );
}


export default App;
