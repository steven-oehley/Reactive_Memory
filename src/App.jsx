import { useEffect, useState } from "react";
import "./App.css";

import cardImages from "./data/cardData";
import { shuffleCards } from "./utilities/cardUtils";
import CardGrid from "./components/CardGrid";

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  function handleChoice(card) {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    // cant make comparison here - state updates are scheduled
  }

  function newGame() {
    setCards(shuffleCards(cardImages));
    setTurns(0);
    setChoiceOne(null);
    setChoiceTwo(null); // incase any still selected
  }

  function resetTurns() {
    setTurns((prev) => prev + 1);
    setChoiceOne(null);
    setChoiceTwo(null);
    setDisabled(false);
  }

  useEffect(() => {
    setCards(shuffleCards(cardImages));
  }, []);

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prev) => {
          return prev.map((card) => {
            if (card.src === choiceOne.src) {
              // no need to check second choice here, checked above
              return { ...card, matched: true };
            }
            return card;
          });
        });
        resetTurns();
      } else {
        setTimeout(() => {
          resetTurns();
        }, 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  return (
    <div className="App">
      <h1>Reactive Memory ⚛︎</h1>
      <button onClick={newGame}>New Game</button>
      <CardGrid
        cards={cards}
        handleChoice={handleChoice}
        choiceOne={choiceOne}
        choiceTwo={choiceTwo}
        disabled={disabled}
      />
      <p>Turns: {turns}</p>
    </div>
  );
}

export default App;
