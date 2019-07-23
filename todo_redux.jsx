import React from 'react';
import ReactDOM from 'react-dom';
import Root from './frontend/components/root'
import configureStore from './frontend/store/store.js';
import { allTodos } from './frontend/reducers/selectors';
import { getAllTodos, createNewTodo, updateTodo, deleteTodo } from './frontend/util/todo_api';

const store = configureStore();

document.addEventListener("DOMContentLoaded", () => {
  // TESTING
  // window.store = store;
  // window.getAllTodos = getAllTodos;
  // window.createNewTodo = createNewTodo;
  // window.updateTodo = updateTodo;
  // window.deleteTodo = deleteTodo;

  // window.allTodos = allTodos;
  
  
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);
});
