import { ADD_TASK, DELETE_TASK } from "./actions";

const initialState = {
  tasks: [],
};

export default function deleteReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
      case DELETE_TASK:
        return {
            ...state,
            tasks: state.tasks.filter(task => task.id !== action.payload.id),
        }
    default:
      return state;
  }
}
