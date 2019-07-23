import { connect } from 'react-redux';
import TodoList from './todo_list';
import { allTodos } from '../../reducers/selectors';
import { receiveTodo, removeTodo, updateTodo, createNewTodo, fetchTodos, updateTodoInDB, removeTodoFromDB } from '../../actions/todo_actions';
import { clearErrors } from '../../actions/error_actions';

const mapStateToProps = state => {
  return {
    todos: allTodos(state),
    errors: state.errors
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // receiveTodo: todo => dispatch(receiveTodo(todo)),
    // removeTodo: id => dispatch(removeTodo(id)),
    // updateTodo: todo => dispatch(updateTodo(todo)),
    fetchTodos: () => dispatch(fetchTodos()),
    createNewTodo: todo => dispatch(createNewTodo(todo)),
    updateTodoInDb: todo => dispatch(updateTodoInDB(todo)),
    removeTodoFromDB: id => dispatch(removeTodoFromDB(id)),
    clearErrors: () => dispatch(clearErrors())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);