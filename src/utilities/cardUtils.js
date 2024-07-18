import { v4 as uuidv4 } from "uuid";

export function shuffleCards(cardArray) {
  const shuffledCards = [...cardArray, ...cardArray]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: uuidv4() }));

  return shuffledCards;
}
