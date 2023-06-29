"use client"

import { useState } from "react";
import { useDispatch } from "react-redux";
import { handleNewTask } from "@/app/redux/store/tasks/actions";

export default function Input() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleNewTask(inputValue, "add"))
    setInputValue("");
  }

  return (
    <form className="min-w-full flex justify-center p-8" onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleChange} />
    </form>
  );
}
