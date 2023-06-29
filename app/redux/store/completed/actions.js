export const ADD_TO_COMPLETED = "ADD_TO_COMPLETED";

export const handleCompleted = (item) => ({
    type: ADD_TO_COMPLETED,
    payload: item,
})