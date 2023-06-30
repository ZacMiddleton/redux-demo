import { ADD_TO_COMPLETED, REMOVE_FROM_COMPLETED } from "./actions";

const initialState = {
  completed: [],
};

export default function completedReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_COMPLETED:
      return {
        ...state,
        completed: [...state.completed, action.payload],
      };
    case REMOVE_FROM_COMPLETED:
      return {
        ...state,
        completed: state.completed.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
}
