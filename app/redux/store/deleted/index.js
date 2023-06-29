import { ADD_TO_DELETED, REMOVE_FROM_DELETED } from "./actions";

const initialState = {
    deleted: [],
};

export default function deleteReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_DELETED:
      return {
        ...state,
        deleted: [...state.deleted, action.payload],
      };
      case REMOVE_FROM_DELETED:
        return {
            ...state,
            deleted: state.deleted.filter(task => task.id !== action.payload.id),
        }
    default:
      return state;
  }
}