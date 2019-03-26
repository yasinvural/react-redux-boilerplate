import { INCREMENT, DECREMENT } from "../const/index";
let initialState = {
  value: 0
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, {
        value: state.value+1
      });
      return;
    case DECREMENT:
      return Object.assign({}, state, {
        value: state.value-1
      });
      return;
    default:
      return state;
  }
};

export default counter;
