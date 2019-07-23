import * as todoAPIUtil from '../util/todo_api'
import { receiveErrors } from './error_actions';

export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';

// TODO OBJECT ARRAY
export const receiveTodos = (todos) => {
  return {
    type: RECEIVE_TODOS,
    todos
  }
}

// SINGLE TODO OBJECT
export const receiveTodo = (todo) => {
  return {
    type: RECEIVE_TODO,
    todo
  }
}

export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    id
  }
}

export const updateTodo = (todo) => {
  return {
    type: UPDATE_TODO,
    todo
  }
}

export const fetchTodos = () => {
  return dispatch => {
    return todoAPIUtil.getAllTodos()
                      .then(todos => {
                        return dispatch(receiveTodos(todos))
                      })
  }
}

export const createNewTodo = (todo) => {
  return dispatch => {
    return todoAPIUtil.createNewTodo(todo)
                      .then(
                        newTodo => dispatch(receiveTodo(newTodo)),
                        err => dispatch(receiveErrors(err.responseJSON))
                      )
  }
}

export const updateTodoInDB = (todo) => {
  return dispatch => {
    return todoAPIUtil.updateTodo(todo)
                      .then(updatedTodo => {
                        return dispatch(updateTodo(updatedTodo))
                      })
  }
}

export const removeTodoFromDB = (id) => dispatch => {
  return todoAPIUtil.deleteTodo(id)
                    .then(deletedTodo => {
                      return dispatch(removeTodo(deletedTodo.id))
                    })
}