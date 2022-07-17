import { useReducer, useEffect } from "react";
import { defaultState, reducer } from "./reducer";
import Board from "./components/Board";
import Controls from "./components/Controls";

const App = function () {
  const [state, dispatch] = useReducer(reducer, defaultState());

  useEffect(() => {
    dispatch({ type: "NEW_GAME" });
  }, []);

  useEffect(() => {
    if (state.choices[0] && state.choices[1]) {
      setTimeout(function () {
        dispatch({ type: "COMPARE_CARDS" });
      }, 1000);
    }
  }, [state.choices]);

  return (
    <div className="App">
      <Board state={state} dispatch={dispatch} />
      <Controls state={state} dispatch={dispatch} />
    </div>
  );
};

export default App;
