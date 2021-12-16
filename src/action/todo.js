import { ADD_TODO, REMOVE_TODO } from "./action-type";
//these are the actions and action creator
//return an object including type and other key value pair

export const addTodo = todo =>({
  type: ADD_TODO,
  payload: todo
})

export const removeTodo = id =>({
  type: REMOVE_TODO,
  payload: id
})