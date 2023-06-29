import { ADD_TASK, DELETE_TASK } from "./actions";

const initialState = {
  tasks: [],
};

export default function TaskReducer(state = initialState, action) {
    console.log(action.payload);
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
