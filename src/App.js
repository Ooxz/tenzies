import React, { useState } from "react";
import Die from "./components/Die";
import {nanoid} from 'nanoid';

function App() {

  const [dice, setDice] = useState(allNewDice())
  

  const diceElements = dice.map((die) => <Die holdDice={() => holdDice(die.id)} isHeld={die.isHeld} key={die.id} value={die.value} />);

  

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.ceil(Math.random() * 6), 
        isHeld: false,
        id: nanoid()
      });
    }
    return newDice;
  }
  

  function rollDice() {
    setDice(oldDice => oldDice.map(die => {
      if (die.isHeld === false) {
        die.value = Math.ceil(Math.random() * 6);
      }
      return die;
    }));
  }

  // different methods to update the holddice function
  // to flip isHeld property on the object in the array
  // that was clicked based on the 'id' passed into the function

  function holdDice(id) {
    // setDice(dice.map(oldDice => oldDice.id === id ? {...oldDice, isHeld: !oldDice.isHeld} : oldDice))
    setDice(oldDice => oldDice.map(die => die.id === id ? {...die, isHeld: !die.isHeld} : die))
      
    // setDice(dice.map(die => {
    //   if (die.id === id) {
    //     die.isHeld = !die.isHeld;
    //   }
    //   return die;
    // }));
  }



  return (
    <main>
        <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. 
            Click each die to freeze it at its current value between rolls.</p>
      <div className="dice-container" >{diceElements}</div>
      <button className="roll-dice" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}

export default App;
