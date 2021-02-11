import "./styles.css";
import useInput from "./useInput";
import { useState, useEffect } from "react";

const App = () => {
  const sayHello = () => console.log("hello");
  const [number, setNumber] = useState(0);
  const [anumber, setaNumber] = useState(0);

  useEffect(sayHello, []);
  return (
    <div className="App">
      <h1>Hello </h1>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setaNumber(anumber + 1)}>{anumber}</button>
    </div>
  );
};

export default App;
