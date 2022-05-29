import Card from "./Card";

const images = ["clock", "flag", "gift", "lock", "puzzle", "safe"];

const Board = function (props) {
  return (
    <div className="board">
      {[...images, ...images].map((img) => {
        return (
          <Card
            card={{ src: img }}
            state={props.state}
            dispatch={props.dispatch}
          />
        );
      })}
    </div>
  );
};

export default Board;
