"use client";
import { list } from "postcss";
import { useDispatch, useSelector } from "react-redux";
import { handleNewTask, handleDeleted } from "@/app/redux/store/ItemActions";

export default function Deleted() {
  const deleted = useSelector((state) => state.taskHandlerReducer.deleted);
  const dispatch = useDispatch();

  const deletedTasks = deleted.deleted;

  const handleClick = (task) => {
    dispatch(handleNewTask({item: task.name, request: "add"}));
    dispatch(handleDeleted({item: task, request: "delete"}));
  };

  return (
    <div className="w-1/4 border border-black bg-white">
      <h1 className="text-center text-lg">Deleted</h1>
      <div>
        <ul>
          {deleted.map((item) => (
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
