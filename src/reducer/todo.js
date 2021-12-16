import { ADD_TODO, REMOVE_TODO } from "../action/action-type";

//todo reducer
//reducer takes two parameter state and action and return new state

const initialstate = [];

export default (state = initialstate, action) => {

  switch(action.type){
    case ADD_TODO:
      return[...state, action.payload]
    case REMOVE_TODO:
      return state.filter(
        todo => todo.id !== action.payload
      )
    default:
      return state
  }

}