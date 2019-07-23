import { merge } from 'lodash';
import { RECEIVE_TODO, RECEIVE_TODOS, REMOVE_TODO, UPDATE_TODO } from '../actions/todo_actions';

export default (state = {}, action) => {
  Object.freeze(state)
  
  let newState
  switch (action.type) {
    case RECEIVE_TODO: {

      const { title, body, done, id } = action.todo;
      const todoToUpload = {
        [id]: {
          title,
          body,
          done,
          id
        }
      }
      return merge({}, state, todoToUpload)
    }
    case RECEIVE_TODOS:
      newState = {};
      action.todos.forEach(todo => {
        if (todo.id === undefined) {
          const id = Math.floor(Math.random() * 1000000)
          todo.id = id
          newState[id] = todo; 
        } else {
          newState[todo.id] = todo;
        }
      });
      return merge({}, newState)
    
    case REMOVE_TODO: 
      newState = merge({}, state);
      delete newState[action.id];
      return newState;
    
    case UPDATE_TODO: 
      newState = merge({}, state);
      newState[action.todo.id] = action.todo;
      return newState;
    
    default:
      return state
  }
}

