import React from "react";
import { useState } from "react";

const tasklist = ({ Task, setTask }) => {
const handleremove = (id) => {
  const updatedtask = Task.filter(task => task.id !== id)
  setTask(updatedtask)
}

const handledone= (id) =>{
  const updatedtask = Task.map((task) => 
    task.id === id ? {...task, done: true} : task
  );
  setTask(updatedtask);
};
  return (
    <>
      <div className=" sm:mt-10 sm:flex sm:flex-row sm:gap-6 sm:flex-wrap sm:justify-center sm:items-center sm:w-screen sm:max-h-[full] sm:overflow-y-auto ">
        {Task.map((task) => (
          <div key={task.id} className={`border mx-5 my-10 h-20 flex flex-col justify-around px-6 shadow-2xl rounded-2xl overflow-y-auto sm:border sm:w-90 sm:h-20 sm:rounded-2xl sm:pt-1 sm:shadow sm:flex sm:flex-col sm:justify-center ${task.done ? 'bg-emerald-100' : 'bg-white'}` }>
            <li className="list-none">
              <div className=" flex flex-row justify-between sm:flex sm:flex-row sm:mx-3 sm:justify-between sm:my-auto ">
                <p>{task.id}</p>
                <button onClick={() => {handledone(task.id)}} className="sm:hover:bg-gray-200 sm:hover:text-green-700 sm:w-20 sm:rounded sm:hover:border sm:hover:cursor-pointer sm:hover:shadow-xl sm:hover:rounded ">
                  Done
                </button>
              </div>
              <div className=" flex flex-row justify-between sm:flex sm:flex-row sm:justify-between sm:mx-3 sm:my-auto">
                <p>{task.name}</p>
                <button onClick={() => {handleremove(task.id)}} className="sm:hover:bg-red-100 sm:w-20 sm:rounded sm:hover:border sm:hover:cursor-pointer sm:hover:shadow-xl sm:hover:rounded sm:hover:text-red-600">
                  Remove
                </button>
              </div>
            </li>
          </div>
        ))}
      </div>
    </>
  );
};

export default tasklist;
