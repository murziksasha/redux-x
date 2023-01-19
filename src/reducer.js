const initialState = 0;

const reducer = (state = initialState, action) => {

 

  switch(action.type){
    case 'RND':
      return state + action.payload;
    case 'INC':
      return state +1;
    case 'DEC':
      return state - 1;
      case 'ZERO':
        return state = 0;
    default:
     return state;
  }
}


export default reducer;