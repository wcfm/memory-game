export const defaultState = {
  turns: 0,
};

export const reducer = function (state, action) {
  switch (action.type) {
    case "NEW_GAME":
      return defaultState;
    case "HANDLE_CLICK":
      return { turns: state.turns + 1 };
    default:
      throw new Error("Unknow action type");
  }
};
