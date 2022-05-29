const Card = function (props) {
  const onClickHandler = function () {
    if (!props.state.disabled && !props.card.matched) {
      props.dispatch({ type: "HANDLE_CLICK", payload: { id: props.card.id } });
    }
  };

  return (
    <div
      className={props.active ? "card active" : "card"}
      onClick={onClickHandler}
    >
      <div className="card__inner">
        <img
          className="card__front"
          src="./images/front.png"
          alt={`Front card`}
        />
        <img className="card__back" src={props.card.src} alt={`Back card`} />
      </div>
    </div>
  );
};

export default Card;
