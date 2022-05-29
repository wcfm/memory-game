import { useState } from "react";

const Card = function (props) {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      className={toggle ? "card active" : "card"}
      onClick={() => setToggle((p) => !p)}
    >
      <div className="card__inner">
        <img
          className="card__front"
          src="./images/front.png"
          alt={`Front card`}
        />
        <img
          className="card__back"
          src={`images/${props.card.src}.png`}
          alt={`Back card`}
        />
      </div>
    </div>
  );
};

export default Card;
