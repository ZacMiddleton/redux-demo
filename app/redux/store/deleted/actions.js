export const ADD_TO_DELETED = "ADD_TO_DELETED";
export const REMOVE_FROM_DELETED = "REMOVE_FROM_DELETED";

export const handleDeleted = (item, request) => {
  return (dispatch) => {
    switch (request) {
      case "add":
        return dispatch({
          type: ADD_TO_DELETED,
          payload: {
            name: item.name,
            id: item.id,
          },
        });
      case "delete":
        return dispatch({
          type: REMOVE_FROM_DELETED,
          payload: {
            id: item.id,
          },
        });
      default:
        console.error(`Unknown request: ${request}`);
        return;
    }
  };
};
