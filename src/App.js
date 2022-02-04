import { useEffect, useState } from "react";
import Dice from "./components/Dice";
import { nanoid } from "nanoid";

function App() {
  const [diceArr, setDiceArr] = useState(generateRandomArr());
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const firstValue = diceArr[0].digit;
    setIsCompleted(
      diceArr.every((value) => value.isHeld && value.digit === firstValue)
    );
  }, [diceArr]);

  function generateRandomArr() {
    const newArr = [];
    for (let index = 0; index < 10; index++) {
      let randomValue = {
        id: nanoid(),
        digit: Math.ceil(Math.random() * 6),
        isHeld: false,
      };
      newArr.push(randomValue);
    }
    return newArr;
  }

  const handleRoll = () => {
    if (isCompleted) {
      setDiceArr(generateRandomArr());
      setIsCompleted(false);
    } else {
      const randomArr = generateRandomArr();
      setDiceArr(
        diceArr.map((value, index) => (value.isHeld ? value : randomArr[index]))
      );
    }
  };

  const handleClick = (id) => {
    const newArr = diceArr.map((value) =>
      value.id === id ? { ...value, isHeld: !value.isHeld } : value
    );
    setDiceArr(newArr);
  };

  return (
    <div className="main mt-5 d-flex flex-column justify-content-center">
      <h2 className="text-center pt-3">Dice Game</h2>
      <Dice diceArr={diceArr} handleClick={handleClick} />
      <button
        className="btn btn-primary align-self-center"
        onClick={handleRoll}
      >
        {isCompleted ? "New Game" : "Roll"}
      </button>
    </div>
  );
}

export default App;
