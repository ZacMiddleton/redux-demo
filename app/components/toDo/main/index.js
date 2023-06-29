"use client";

import { useSelector, useDispatch } from "react-redux";
import { handleNewTask } from '@/app/redux/store/tasks/actions';

export default function Main() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  console.log(tasks)

  const handleDelete = (task) => {
    console.log(task);
    tasks.tasks.map((item) => {
      if (item.id === task.id) {
        dispatch(handleNewTask(task, "delete"))
      }
    })
  }
  
  return (
    <div className="w-1/4 border border-black mx-10 bg-white">
      <h1 className="text-center text-lg">To Do</h1>
      <div>
        <ul>
          {tasks.tasks.map((item) => <li key={item.id}>
            <h2>{item.name}</h2>
            <div className="flex mb-5">
              <button className="text-xs mr-5">complete</button>
              <button onClick={() => handleDelete(item)} className="text-xs">delete</button>
            </div>
            </li>)}
        </ul>
      </div>
    </div>
  );
};
