const prepareCards = function () {
  const images = ["clock", "flag", "gift", "lock", "puzzle", "safe"];
  const cards = images.map((image) => ({
    src: `/images/${image}.png`,
  }));

  return [...cards, ...cards]
    .sort(() => Math.random() - 0.5)
    .map((card, index) => ({ ...card, id: index + 1, matched: false }));
};

export const defaultState = {
  cards: prepareCards(),
  choices: [null, null],
  disabled: false,
  turns: 0,
};

export const reducer = function (state, action) {
  switch (action.type) {
    case "NEW_GAME":
      return defaultState;
    case "HANDLE_CLICK":
      if (!state.choices[0]) {
        return { ...state, choices: [action.payload.id, null] };
      }
      if (!state.choices[1] && action.payload.id !== state.choices[0]) {
        return {
          ...state,
          choices: [state.choices[0], action.payload.id],
          disabled: true,
        };
      }
      return { ...state };

    case "COMPARE_CARDS":
      const choiceOneSrc = state.cards[state.choices[0] - 1].src;
      const choiceTwoSrc = state.cards[state.choices[1] - 1].src;

      if (choiceOneSrc === choiceTwoSrc) {
        const newCards = state.cards.map((card) => {
          if (card.src === choiceOneSrc) {
            return { ...card, matched: true };
          }
          return { ...card };
        });
        return {
          cards: newCards,
          disabled: false,
          choices: [null, null],
          turns: state.turns + 1,
        };
      }
      return {
        cards: state.cards,
        choices: [null, null],
        disabled: false,
        turns: state.turns + 1,
      };

    default:
      throw new Error("Unknow action type");
  }
};
