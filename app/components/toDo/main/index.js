"use client";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleNewTask } from "@/app/redux/store/tasks/actions";
import { handleDeleted } from "@/app/redux/store/deleted/actions";

export default function Main() {
  const [domloaded, setDomLoaded] = useState(false);
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const handleDelete = (task, request) => {
    dispatch(handleNewTask(task, request));
    dispatch(handleDeleted(task));
  };

  const taskList = tasks?.tasks;

  return (
    <div className="w-1/4 border border-black mx-10 bg-white">
      {domloaded && (
        <>
          <h1 className="text-center text-lg">To Do</h1>
          <div>
            <ul>
              {taskList &&
                taskList.map((item) => (
                  <li key={item.id}>
                    <h2>{item.name}</h2>
                    <div className="flex mb-5">
                      <button className="text-xs mr-5">complete</button>
                      <button
                        onClick={() => handleDelete(item, "delete")}
                        className="text-xs"
                      >
                        delete
                      </button>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
