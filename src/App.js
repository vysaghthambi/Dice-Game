import { useState } from "react";
import Dice from "./components/Dice";
import { nanoid } from 'nanoid'

function App() {
  const [diceArr,setDiceArr] = useState(generateRandomArr);

  function generateRandomArr() {
    const newArr = [];
    for (let index = 0; index < 10; index++) {
      let randomValue = {
        id: nanoid(),
        digit: Math.ceil(Math.random() * 6),
        isHeld: false
      }
      newArr.push(randomValue)
    }
    return newArr;
  }

  return (
    <div className="main mt-5 d-flex flex-column justify-content-center">
      <h2 className="text-center pt-3">Dice Game</h2>
        <Dice diceArr={diceArr}/>
      <button className="btn btn-primary align-self-center">Roll</button>
    </div>
  );
}

export default App;
