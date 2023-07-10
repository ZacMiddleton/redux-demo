import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  completed: [],
  deleted: [],
  tasks: [],
};

export const taskHandler = createSlice({
  name: "taskHandler",
  initialState,
  reducers: {
    handleCompleted: (state, action) => {
      const { item, request } = action.payload;
      if (request === "add") {
        state.completed.push({
          name: item.name,
          id: item.id,
        });
      } else if (request === "delete") {
        state.completed = state.completed.filter((task) => task.id !== item.id);
      }
    },
    handleNewTask: (state, action) => {
      const { item, request } = action.payload;
      if (request === "add") {
        state.tasks.push({
          name: item,
          id: Math.floor(Math.random() * 10000),
        });
      } else if (request === "delete") {
        state.tasks = state.tasks.filter((task) => task.id !== item);
      }
    },
    handleDeleted: (state, action) => {
      const { item, request } = action.payload;
      if (request === "add") {
        state.deleted.push({
          name: item.name,
          id: item.id,
        });
      } else if (request === "delete") {
        state.deleted = state.deleted.filter((task) => task.id !== item.id);
      }
    },
  },
});

export const { handleCompleted, handleDeleted, handleNewTask } =
  taskHandler.actions;
export default taskHandler.reducer;
