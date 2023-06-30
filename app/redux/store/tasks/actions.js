export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";

export const handleNewTask = (item, request) => {
  return (dispatch) => {
    switch (request) {
      case "add":
        return dispatch({
          type: ADD_TASK,
          payload: {
            name: item,
            id: Math.floor(Math.random() * 10000),
          },
        });
      case "delete":
        return dispatch({
          type: DELETE_TASK,
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
