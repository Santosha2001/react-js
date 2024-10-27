import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SanthuButton from "./SanthuButton";
import Random from "./Random";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h2>Learning React</h2>
        <SanthuButton></SanthuButton>
        <Random></Random>
      </div>
    </>
  );
}

export default App;
