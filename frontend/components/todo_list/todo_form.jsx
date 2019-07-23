import React from "react";

class TodoForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {title: "", body: ""}
    this.handleSubmit = this.handleSubmit.bind(this)
    this.update = this.update.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    const { title, body } = this.state;
    const { createNewTodo, clearErrors } = this.props
    createNewTodo({
      title, 
      body,
      done: false
    }).then(
      () => {
        this.setState({title: "", body: ""});
        clearErrors();
      }
    );
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    // const { title, body, done } = this.props.todo
    return (
      <form className="todo-form" onSubmit={this.handleSubmit}>
        <label>
          Title
          <input
            type="text"
            onChange={this.update("title")}
            value={this.state.title}
          />
        </label>
        <label>
          Body
          <input
            type="text"
            onChange={this.update("body")}
            value={this.state.body}
          />
        </label>
        <input type="submit" value="Add New Todo" />
      </form>
    );
  }
} 

export default TodoForm