import React,{ useState } from 'react'

import { 
 Form,
 FormGroup,
 Input,
 Button,
 InputGroup,
 InputGroupAddon
} from 'reactstrap'

import {v4} from 'uuid'
//implementation of version of redux for react
import {connect} from 'react-redux'

import {addTodo} from  '../action/todo'

 const TodoForm = ({addTodo}) => {

  const [title, setTitle] = useState("");

  const handleSubmit = e =>{
    e.preventDefault();
    if(title === ''){
      return alert('Please add a todo')
    }

    const todo = {
      title,
      id: v4()
    }
    addTodo(todo);
    setTitle("");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <InputGroup>
          <Input
            type="text"
            name="todo"
            id="todo"
            placeholder='Your next Todo'
            value={title}
            onChange={e =>setTitle(e.target.value)}
          />
          <Button color="info" onClick={handleSubmit}>ADD</Button>
         </InputGroup>
      </FormGroup>
    </Form>
  )
}

const mapStateToProps = state => ({
 //to bring data from the state into component
 //from the central state into your application
})
//dispatch action from component
const mapDispatchToProps = dispatch =>({

  addTodo: todo =>{
    dispatch(addTodo(todo))
  }

})
//connect redux with react
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)