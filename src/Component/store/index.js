import { createStore } from "redux";

const counterReducer = (state = { list: [] }, action) => {
  if (action.type === "addIngredient") {
    console.log(action.value);
    return { list: state.list.push(action.value) };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
