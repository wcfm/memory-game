import Card from "./Card";

const Board = function (props) {
  const cardsList = props.state.cards.map((card) => {
    const condition =
      card.id === props.state.choices[0] ||
      card.id === props.state.choices[1] ||
      card.matched;

    return (
      <Card
        key={card.id}
        card={card}
        dispatch={props.dispatch}
        state={props.state}
        active={condition}
      />
    );
  });

  return <div className="board">{cardsList}</div>;
};

export default Board;
