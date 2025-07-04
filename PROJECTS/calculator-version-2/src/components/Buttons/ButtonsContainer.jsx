import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({ onButtonClcik }) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <>
      <div className={styles.buttonsContainer}>
        {buttonNames.map((buttonName) => {
          return (
            <button
              className={styles.button}
              key={buttonName}
              onClick={() => onButtonClcik(buttonName)}
            >
              {buttonName}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default ButtonsContainer;
