import React from "react";
import MyImage from '../photos/myImage.jpg'
import { Route, Routes, useNavigate, Link } from "react-router-dom";


const Header = () => {
  return (
    <div className=" max-h-15 mx-3 shadow-xl flex flex-row justify-between items-center sm:flex sm:h-18 sm:flex-row sm:py-5 sm:mx-12 sm:justify-between sm:shadow-xl">
      <div className="flex flex-col sm:flex sm:flex-row">
        <img src={MyImage} alt="Logo" className=" w-8 h-8 sm:w-7 sm:h-7 hover:cursor-pointer" />
        <h1 className="bold text-xl sm:bold sm:font-serif sm:text-2xl sm:hover:cursor-pointer">
          <Link to="/home" className="hover:cursor-pointer">TickBox</Link>
        </h1>
      </div>
      <div className=" flex sm:flex sm:flex-row sm:mx-5">
        <nav className=" flex flex-row gap-4 mx-2 sm:flex sm:gap-20">
          <h2>
            <Link to='/home' className=" sm:hover:shadow sm:hover:h-8 w-16 sm:hover:rounded sm:hover:cursor-pointer sm:hover:bg-gray-100 ">
              Home
            </Link>
          </h2>
          <h2>
            <Link to='/tasklist' className=" sm:hover:shadow sm:hover:h-8 w-20 sm:hover:rounded sm:hover:cursor-pointer sm:hover:bg-gray-100 ">
              TaskList
            </Link>
          </h2>
          <h2>
            <Link to='/' className=" sm:hover:shadow sm:hover:h-8 w-16 sm:hover:rounded sm:hover:cursor-pointer sm:hover:bg-gray-100 ">
              Logout
            </Link>
          </h2>
        </nav>
      </div>
    </div>
  );
};

export default Header;
