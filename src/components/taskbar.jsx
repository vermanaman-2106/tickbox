import { useState } from "react";
import React from "react";
import "tailwindcss";
import Tasklist from "./tasklist";
import { v4 as uuid } from "uuid";

const taskbar = ({ Task, setTask }) => {
    const [inputvalue, setinputvalue] = useState("");
    const handelsubmit = (e) => {
    e.preventDefault();
    const newtask = { id: Date.now(), name: e.target.task.value };
    setTask([...Task, newtask]);
    setinputvalue("");
    alert("Task Updated");
  };
  
  return (
    <>
      <form onSubmit={handelsubmit} className=" flex felx-row items-center justify-center h-50 my-15 sm:max-h-150 sm:mt-0 sm:m-0">
        <div className="sm:flex sm:w-screen sm:flex-col sm:items-center sm:h-full">
          <div className=" flex flex-row gap-3 sm:h-9 sm:w-150 sm:flex sm:gap-3 sm:flex-row sm:mt-35 sm:mx-auto">
            <input
              className=" shadow w-60 h-12 sm:h-9 sm:w-100 sm:border sm:rounded"
              type="text"
              placeholder="Add your daily task"
              name="task"
              value={inputvalue}
              onChange={(e) => setinputvalue(e.target.value)}
            />
            <button className=" w-23 shadow-xl bg-gray-50 sm:h-9 sm:w-30 sm:border sm:rounded sm:hover:drop-shadow-2xl sm:hover:cursor-pointer sm:hover:bg-gray-200">
              Add Task
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default taskbar;
