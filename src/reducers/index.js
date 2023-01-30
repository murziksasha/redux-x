import { ZERO, INC } from "../actions/actionTypes";


const initialState = {value: 0}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ZERO:
      return {
        ...state,
        value: state.value = 0
      };
    case INC: 
      return {
        ...state,
        value: state.value + 1,
      }
    default:
      return state
  }
}

export default reducer;