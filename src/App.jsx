import "./App.css";
import Output from "./components/Output";
import Input from "./components/Input";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [output, setOutputValue] = useState(0);
  const [input, setInputValue] = useState(0);
  function clickEventHandling(value) {
    if (value == "C") {
      setInputValue(0);
      setOutputValue(0);
    } else if (value == "DEL") {
      // slice(start,end)(0,1)
      // input.length ==1? setInputValue(0): setInputValue(input.slice(0,input.length-1))
      if(input!=0){
        input.length ==1? setInputValue(0): setInputValue(input.slice(0,input.length-1))
      }
    } else if (value == "=") {
        setOutputValue(eval(input))
        setInputValue(0)
    } else {
      input == 0 ? setInputValue(value) : setInputValue(input + value);
    }
  }
  return (
    <div className="App">
      <div className="calculator_frame">
        <Output output={output} />
        <Input input={input} />
        <Button clickEventHandling={clickEventHandling} />
      </div>
    </div>
  );
}

export default App;
