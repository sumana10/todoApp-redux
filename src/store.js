import {createStore, combineReducers} from "redux"

import todos from "./reducer/todo"

//for combining multiple reducer

const rootReducer = combineReducers({
  todos
})

// and create a store for reducers

const store = createStore(rootReducer)

export default store