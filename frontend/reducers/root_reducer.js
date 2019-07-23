import todosReducer from "./todos_reducer";
import { combineReducers } from "redux";
import errorReducer from "./error_reducer";


const rootReducer = combineReducers({todos: todosReducer, errors: errorReducer})
// ^^^^ THIS IS THE SAME AS THE BELOW LINE. 

// const rootReducer = (state = {}, action) => {
//   return {
//     todos: todosReducer(state.todos, action),
//   }
// }

export default rootReducer;