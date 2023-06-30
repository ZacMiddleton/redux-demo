export const ADD_TO_COMPLETED = "ADD_TO_COMPLETED";
export const REMOVE_FROM_COMPLETED = "REMOVE_FROM_COMPLETED";

export const handleCompleted = (item, request) => {
  return (dispatch) => {
    switch (request) {
      case "add":
        return dispatch({
          type: ADD_TO_COMPLETED,
          payload: {
            name: item.name,
            id: item.id,
          },
        });
      case "delete":
        return dispatch({
          type: REMOVE_FROM_COMPLETED,
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
