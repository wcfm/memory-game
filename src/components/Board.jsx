import Card from "./Card";

const images = ["clock", "flag", "gift", "lock", "puzzle", "safe"];

const Board = function () {
  return (
    <div className="board">
      {[...images, ...images].map((img) => {
        return <Card card={{ src: img }} />;
      })}
    </div>
  );
};

export default Board;
