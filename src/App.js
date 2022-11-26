import { useState } from "react";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const operators = ['+', '-', '*', '/', '.'];

  const updateCalculator = value => {
    if (
      operators.includes(value) && calc === '' ||
      operators.includes(value) && operators.includes(calc.slice(-1))
    ) { return; }
    
    setCalc(calc + value)

    if (!operators.includes(value)) {
      setResult(eval(calc + value).toString());
    }

  }

  const createDigits = () => {
    const digit = []

    for(let i = 1; i < 10; i++) {
      digit.push(
        <button 
          onClick={() => updateCalculator(i.toString())} 
          key={i}
        >{i}</button>
      );
    }

    return digit;
  }

  const calculate = () => {
    setCalc(eval(calc).toString());
  }

  const backspace = () => {
    if(calc == '') {
      return;
    }

    const value = calc.slice(0, -1);
    
    setCalc(value);

  }

  const reset = () => {
    return setCalc('');
  }

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          { result ? <span>({result})</span> : '' } &nbsp;
          { calc || "0" }
        </div>

        <div className="clear">
          <button onClick={reset}>CLEAR</button>
          <button onClick={backspace}>DEL</button>
        </div>

        <div className="operators">
          <button onClick={() => updateCalculator('+')}>+</button>
          <button onClick={() => updateCalculator('-')}>-</button>
          <button onClick={() => updateCalculator('*')}>*</button>
          <button onClick={() => updateCalculator('/')}>/</button>
        </div>

        <div className="digits">
          { createDigits() }
          <button onClick={() => updateCalculator('0')}>0</button>
          <button onClick={() => updateCalculator('.')}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
