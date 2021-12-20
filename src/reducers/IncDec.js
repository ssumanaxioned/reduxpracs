const initial = 1

const changeTheNumber =(state = initial, action)=> {
  switch(action.type) {
    case 'INCREMENT' : return state + 1;
    case 'DECREMENT' : return state - 1;
    case 'INPUTNUM' : return action.payload;
    case 'RESET' : return initial;
    default: return state
  }
}

export default changeTheNumber