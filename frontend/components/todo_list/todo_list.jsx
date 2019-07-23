import React from "react";
import TodoListItem from "./todo_list_item";
import TodoForm from "./todo_form";

export default class TodoList extends React.Component {

  constructor (props) {
    super(props)
  }

  componentDidMount() {
    const { fetchTodos } = this.props;
    fetchTodos()
  }

  render () {
    const { createNewTodo, updateTodoInDb, removeTodoFromDB, todos, clearErrors } = this.props
    let {errors} = this.props
    return (
      <>
        <p>{errors}</p>
        <ul className="todo-list">
          <h4>Things To Do</h4>
          {todos.map(todo => (
            <TodoListItem key={todo.id} todo={todo} removeTodoFromDB={removeTodoFromDB} updateTodoInDb={updateTodoInDb}/>
          ))}
        </ul>
        <TodoForm createNewTodo={createNewTodo} clearErrors={clearErrors}/>
      </>
    )
  }
}