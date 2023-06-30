"use client";
import { useSelector, useDispatch } from "react-redux";
import { handleNewTask } from "@/app/redux/store/tasks/actions";
import { handleDeleted } from "@/app/redux/store/deleted/actions";
import { useEffect, useState } from "react";
import { handleCompleted } from "@/app/redux/store/completed/actions";

export default function Main() {
  const [loading, setLoading] = useState(true);

  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    if (tasks) {
      setLoading(false);
    }
  }, []);

  const handleDelete = (task) => {
    dispatch(handleNewTask(task, "delete"));
    dispatch(handleDeleted(task, "add"));
  };

  const handleComplete = (task) => {
    dispatch(handleCompleted(task, "add"));
    dispatch(handleNewTask(task, "delete"));
  };

  const taskList = tasks?.tasks;

  return (
    <div className="w-1/4 border border-black mx-10 bg-white">
      <>
        <h1 className="text-center text-lg">To Do</h1>
        <div>
          {!loading && (
            <ul>
              {taskList.map((item) => (
                <li key={item.id} className="pl-10">
                  <h2>{item.name}</h2>
                  <div className="flex mb-5">
                    <button  onClick={() => handleComplete(item)} className="text-xs mr-5">complete</button>
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
