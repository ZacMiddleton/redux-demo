"use client";

import { handleCompleted, handleDeleted } from "@/app/redux/store/ItemActions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Completed() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const completed = useSelector((state) => state.taskHandlerReducer.completed);

  const handleClick = (task) => {
    dispatch(handleCompleted({item: task, request: "delete"}));
    dispatch(handleDeleted({item: task, request: "add"}));
  };

  const completedList = completed.completed;

  return (
    <div className="w-1/4 border border-black bg-white">
      <h1 className="text-center text-lg">Completed</h1>
      {!loading && (
        <div>
          <ul>
            {completed.map((item) => (
              <li key={item.id} className="pl-5">
                <h2 className="text-lg">{item.name}</h2>
                <button
                  className="text-xs flex"
                  onClick={() => handleClick(item)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      {loading && (
        <div>
          <h2>Loading...</h2>
        </div>
      )}
    </div>
  );
}
