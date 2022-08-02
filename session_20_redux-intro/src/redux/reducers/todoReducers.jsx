import {
  ADD_TODO,
  CLEAR_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
} from "../types/todoTypes";

const initialState = {
  todoList: [
    { id: new Date().getTime(), text: "Work On Redux", completed: true },
  ],
};

const todoReducer = (state = initialState, { type, payload }) => {
  // console.log(state.todoList[0].completed);

  switch (type) {
    case ADD_TODO:
      return {
        todoList: [
          ...state.todoList,
          { id: new Date().getTime(), text: payload, completed: false },
        ],
      };
    case DELETE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.id !== payload),
      };
    case TOGGLE_TODO:
      state.todoList.map((item) => {
        if (item.id === payload) {
          item.completed = !item.completed;
        }
      });
      // return { todoList: [...state.todoList] };
      return { todoList: [...state.todoList] };

    case CLEAR_TODO:
      return initialState;
    default:
      return state;
  }
};
export default todoReducer;
