"use client";
import { list } from "postcss";
import { useDispatch, useSelector } from "react-redux";
import { handleNewTask } from "@/app/redux/store/tasks/actions";
import { handleDeleted } from "@/app/redux/store/deleted/actions";

export default function Deleted() {
  const deleted = useSelector((state) => state.deleted);
  const dispatch = useDispatch();

  const deletedTasks = deleted.deleted;

  const handleClick = (task) => {
    dispatch(handleNewTask(task.name, "add"));
    dispatch(handleDeleted(task, "delete"));
  };

  return (
    <div className="w-1/4 border border-black bg-white">
      <h1 className="text-center text-lg">Deleted</h1>
      <div>
        <ul>
          {deletedTasks.map((item) => (
            <li key={item.id} className="pl-10 mb-3">
              <h2 className="p-0">{item.name}</h2>
              <button
                onClick={() => handleClick(item)}
                className="text-xs flex"
              >
                undo
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
