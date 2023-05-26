import {Button} from 'antd';

const Todo = ({ todo, removeTodo, markTodo }) => {
  return (
    <div className="card" >
      <span style={{ textDecoration: todo.status ? "line-through" : "" }}>{todo.name}</span>
      <div>
        <div className='btns'>
        <Button danger onClick={() => removeTodo(todo.id)}>Delete</Button>
        <Button onClick={() => markTodo(todo.id)}>Done</Button>
        </div>
        
      </div>
    </div>
  )
}

export default Todo
