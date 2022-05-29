function Controls(props) {
  const onClickHandler = function () {
    if (!props.state.disabled) {
      props.dispatch({ type: "NEW_GAME" });
    }
  };

  return (
    <div className="controls">
      <p>Turns: {props.state.turns}</p>
      <button onClick={onClickHandler}>Play again</button>
    </div>
  );
}

export default Controls;
