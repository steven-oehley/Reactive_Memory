import { useState } from "react";
import "./App.css";

import cardImages from "./data/cardData";
import { shuffleCards } from "./utilities/cardUtils";

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  console.log(cards);
  console.log(turns);

  function newGame() {
    setCards(shuffleCards(cardImages));
    setTurns(0);
    console.log(cards);
    console.log(turns);
  }

  return (
    <div className="App">
      <h1>Reactive Memory ⚛︎</h1>
      <button onClick={newGame}>New Game</button>
    </div>
  );
}

export default App;
