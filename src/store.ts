import { createStore } from "redux";

const defaultState: State = { total: 0 };

function reducer(state = defaultState, action: Action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, total: state.total + 1 };
    case "DECREMENT":
      return { ...state, total: state.total - 1 };
    default:
      return state;
  }
}

export const store = createStore(reducer);
