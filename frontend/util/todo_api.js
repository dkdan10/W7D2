export const getAllTodos = () => $.ajax({
  method: "GET",
  url: 'api/todos'
});

export const createNewTodo = (todo) => $.ajax({
  method: "POST", 
  url: "api/todos",
  data: {
    todo
  }
});

export const updateTodo = (todo) => $.ajax({
  method: "PATCH",
  url: `api/todos/${todo.id}`,
  data: {
    todo
  }
});

export const deleteTodo = (id) => $.ajax({
  method: "DELETE",
  url: `api/todos/${id}`,
  data: {
    id
  }
})