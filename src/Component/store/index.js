import { createStore } from "redux";

const counterReducer = (state = { list: [] }, action) => {
  if (action.type === "addIngredient") {
    return {
      list: [...state.list, action.value],
    };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
