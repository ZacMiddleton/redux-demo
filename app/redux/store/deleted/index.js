import { ADD_TO_DELETED } from './actions';

const initialState = {
    deleted: []
  };

export default function deletedReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_TO_DELETED:
            return {
                ...state,
                deleted: [...state.deleted, action.payload]
            }
        default:
            return state;
    }
}