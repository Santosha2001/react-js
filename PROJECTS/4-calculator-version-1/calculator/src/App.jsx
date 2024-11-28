import styles from "./App.module.css";
import ButtonsContainer from "./components/Buttons/ButtonsContainer";
import Display from "./components/Display/Display";

function App() {

  return (
    <>
      <div className={styles.calculator}>
        <Display></Display>
        <ButtonsContainer></ButtonsContainer>
      </div>
    </>
  )
}

export default App
