import { ADD_TO_COMPLETED } from './actions';

const initialState = {
    completed: []
  };

export default function completedReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_TO_COMPLETED:
            return {
                ...state,
                completed: [...state.completed, ...action.payload]
            }
        default:
            return state;
    }
}