import { useState } from "react";
import styles from "./App.module.css";
import ButtonsContainer from "./components/Buttons/ButtonsContainer";
import Display from "./components/Display/Display";

function App() {
  const [calculatorVal, setCalculatorVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalculatorVal("");
    } else if (buttonText === ".") {
      // Prevent multiple decimal points in a number
      if (!calculatorVal.includes(".")) {
        setCalculatorVal(calculatorVal + buttonText);
      }
    } else if (buttonText === "=") {
      const result = eval(calculatorVal);
      setCalculatorVal(result.toString());
    } else {
      const newCalculatorValue = calculatorVal + buttonText;
      setCalculatorVal(newCalculatorValue);
    }
  };

  return (
    <>
      <div className={styles.calculator}>
        <Display displayValue={calculatorVal}></Display>
        <ButtonsContainer onButtonClcik={onButtonClick}></ButtonsContainer>
      </div>
    </>
  );
}

export default App;
