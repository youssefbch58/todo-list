import { ADD_TASK, COMPLETE_TASK, DELETE_TASK, EDIT_TASK, FILTER } from "./actionTypes";

const init = {
  todos: [
    { id: Math.random(), action: "wake up", isDone: true },
    { id: Math.random(), action: "have coffee", isDone: false },
  ],
  filter: false,
};

const reducer = (state = init, action) => {
  switch (action.type) {
    case DELETE_TASK:
      return {
        ...state,
        todos: state.todos.filter((el) => el.id !== action.payload),
      };
    case COMPLETE_TASK:
      return {
        ...state,
        todos: state.todos.map((el) =>
          el.id === action.payload ? { ...el, isDone: !el.isDone } : el
        ),
      };
      case ADD_TASK:
        return {
         ...state,todos:[...state.todos,action.payload]
        };
      case EDIT_TASK:
        return {
          ...state,todos:state.todos.map(el=>el.id===action.payload.id?  action.payload : el )
        }
      case FILTER:
        return {
          ...state,filter:!state.filter
        }
    default:
      return state;
  }
};

export default reducer;
