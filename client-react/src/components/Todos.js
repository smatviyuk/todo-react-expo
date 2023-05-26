import Todo from "./Todo";
import '../index.css'

const Todos = ({ todos, removeTodo, markTodo }) => {
  return (
    <div>
      {todos.map((todo) => (
        <div className="todo" key={todo.id}>
          <div className="card">
          <Todo todo={todo} markTodo={markTodo} removeTodo={removeTodo} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todos;
