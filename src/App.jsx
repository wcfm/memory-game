import { useReducer } from "react";
import { defaultState, reducer } from "./reducer";
import Board from "./components/Board";
import Controls from "./components/Controls";

const App = function () {
  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <div className="App">
      <Board state={state} dispatch={dispatch} />
      <Controls state={state} dispatch={dispatch} />
    </div>
  );
};

export default App;
