import React from "react";

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleRemove(e) {
    e.preventDefault();
    this.props.removeTodoFromDB(this.props.todo.id);
  }

  handleUpdate(e) {
    e.preventDefault();
    this.props.todo.done = !this.props.todo.done;
    this.props.updateTodoInDb(this.props.todo);
  }

  render() {
    const { title, body, done } = this.props.todo
    let doneText = "Not Done"
    if (done) {
      doneText = "Done"
    }
    return (
      <>
        <li className="todo-item" >
          <p>{title}:</p>
          <p>{body}</p>
          <p>{done}</p>
          <button onClick={this.handleRemove}>Remove</button>
          <button onClick={this.handleUpdate}>{doneText}</button>
        </li>
      </>
    );
  }
}

export default TodoListItem