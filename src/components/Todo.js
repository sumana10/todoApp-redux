import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import {FaCheckDouble} from "react-icons/fa"

import { removeTodo } from '../action/todo'
import {connect} from 'react-redux'

const Todo = ({todos, markComplete}) => {
  return (
    <ListGroup className='mt-5 mb-2 items'>
    {todos.map((todo) =>(
      <ListGroupItem key={todo.id}>
        {todo.title}
        <span onClick={() =>markComplete(todo.id)} className='float-end'>
          <FaCheckDouble/>
        </span>
      </ListGroupItem>
    ))}
    </ListGroup>
  )
}
//todos comes from central state
const mapStateToProps = state =>({
  todos: state.todos
})

const mapDispatchToProps = dispatch =>({
  markComplete: id =>{
    dispatch(removeTodo(id))
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Todo)