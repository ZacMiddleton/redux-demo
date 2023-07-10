"use client";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  handleCompleted,
  handleDeleted,
  handleNewTask,
} from "@/app/redux/store/ItemActions";

export default function Main() {
  const [loading, setLoading] = useState(false);

  const tasks = useSelector((state) => state.taskHandlerReducer.tasks);
  const dispatch = useDispatch();

  const handleDelete = (task) => {
    dispatch(handleNewTask({item: task.id, request: "delete"}));
    dispatch(handleDeleted({item: task, request: "add"}));
  };

  const handleComplete = (task) => {
    dispatch(handleCompleted({ item: task, request: "add" }));
    dispatch(handleNewTask({ item: task.id, request: "delete" }));
  };

  const taskList = tasks?.tasks;

  return (
    <div className="w-1/4 border border-black mx-10 bg-white">
      <>
        <h1 className="text-center text-lg">To Do</h1>
        <div>
          {!loading && (
            <ul>
              {tasks.map((item) => (
                <li key={item.id} className="pl-10">
                  <h2>{item.name}</h2>
                  <div className="flex mb-5">
                    <button
                      onClick={() => handleComplete(item)}
                      className="text-xs mr-5"
                    >
                      complete
                    </button>
                    <button
                      onClick={() => handleDelete(item)}
                      className="text-xs"
                    >
                      delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
          {loading && <h1>Loading...</h1>}
        </div>
      </>
    </div>
  );
}
