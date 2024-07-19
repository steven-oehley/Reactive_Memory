// This component is used to render the card component. It takes the card object as a prop and renders the card image based on the card object.
import cover from "../assets/img/cover.png";
import "./Card.css";

function Card({ card, handleChoice, flipped, disabled }) {
  function handleClick() {
    if (disabled) return;
    handleChoice(card);
  }
  function getAltText(card) {
    return card.src.split("/")[3].split("-")[0];
  }
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img src={card.src} alt={getAltText(card)} className="front" />
        <img
          src={cover}
          alt="card-back"
          className="back"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
export default Card;
