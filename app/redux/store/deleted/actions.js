export const ADD_TO_DELETED = "ADD_TO_DELETED";

export const handleDeleted = (item) => ({
    type: ADD_TO_DELETED,
    payload: item,
})