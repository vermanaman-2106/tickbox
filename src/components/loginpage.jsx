import React, { use } from "react";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Navigate, useNavigate } from "react-router-dom";

const Loginpage = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const Navigate = useNavigate();

  const handlelogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Navigate("/home");
    } catch (error) {
      alert("Login failed" + error.message);
    }
  };

  return (
    <>
      <div className=" bg-gradient-to-br from-blue-100 via-white to-purple-100 w-full h-screen flex justify-center items-center sm:flex sm:justify-center sm:items-center sm:w-screen sm:h-screen sm:bg-gradient-to-br from-blue-100 via-white to-purple-100">
        <form
          onSubmit={handlelogin}
          className=" flex flex-col shadow-2xl h-80 w-70 sm:flex sm:flex-col sm:w-100 sm:h-110 sm:shadow-2xl sm:rounded-xl sm:bg-white"
        >
          <div className=" py-5 flex justify-center sm:flex sm:justify-center sm:py-5">
            <h1 className="sm:font-bold sm:text-3xl">Login</h1>
          </div>
          <div className=" gap-5 py-5 px-10 flex flex-col justify-center items-center sm:flex sm:flex-col sm:justify-center sm:items-center sm:py-20 sm:gap-10 ">
            <input
              type="email"
              placeholder="Enter your email"
              className=" w-60 h-8 shadow-xs sm:w-80 sm:h-10 sm:focus:outline-none sm:focus:ring-2 sm:focus:ring-gray-400"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className=" w-60 h-8 shadow-2xs sm:w-80 sm:h-10 sm:focus:outline-none sm:focus:ring-2 sm:focus:ring-gray-400"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              autoComplete="off"
            />
            <button
              type="submit"
              className=" w-60 h-8 shadow-xl sm:w-80 sm:h-10 sm:hover:cursor-pointer sm:hover:bg-gray-100 sm:hover:shadow-md"
            >
              Login
            </button>
            <p className="sm:text-sm sm:text-center sm:mt-2">
              Don't have an account?{" "}
              <a href="/signup" className="text-blue-500 ">
                Sign up
              </a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Loginpage;
