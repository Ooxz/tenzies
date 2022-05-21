import React, { useState, useEffect } from "react";
import Die from "./components/Die";
import {nanoid} from 'nanoid';
import Confetti from 'react-confetti'


    

function App() {

  

  const [dice, setDice] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)

  const diceElements = dice.map((die) => <Die holdDice={() => holdDice(die.id)} isHeld={die.isHeld} key={die.id} value={die.value} />);

  useEffect(() => {
    const allEquals = dice.every((die) => die.value === dice[0].value);
    const allHelds = dice.every((die) => die.isHeld);
    if(allEquals && allHelds) {
      setTenzies(true)
      console.log("You win!")
    }
  }, [dice])

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
      if(tenzies) {
        die.isHeld = false;
      }
      if(tenzies) {
        setTenzies(false)
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
      {tenzies && <Confetti />}
        <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. 
            Click each die to freeze it at its current value between rolls.</p>
      <div className="dice-container" >{diceElements}</div>
      <button className="roll-dice" onClick={rollDice}>
        {tenzies ? "New Game" : "Roll"}
      </button>
    </main>
  );
}

export default App;
