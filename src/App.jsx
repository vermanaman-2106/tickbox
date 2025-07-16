import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "tailwindcss";
import Taskbar from "./components/taskbar";
import Header from "./components/header";
import Loginpage from "./components/loginpage";
import Footer from "./components/Footer";
import Tasklist from "./components/tasklist";
import Signuppage from './components/signuppage'

function App() {
  const [Task, setTask] = useState(
    JSON.parse(localStorage.getItem("Task")) || []
  );

  useEffect(() => {
    localStorage.setItem("Task", JSON.stringify(Task));
  }, [Task]);
  return (
    <>
        <div className=" w-screen flex flex-col min-h-screen sm:w-screen sm:h-screen sm:flex sm:flex-col">
      <Routes>
        <Route path="/signup" element={<Signuppage/>}></Route>
          <Route path="/" element={<Loginpage />}></Route>
          <Route
            path="/home"
            element={
              <>
                <Header></Header>
                <Taskbar Task={Task} setTask={setTask}></Taskbar>
                <Footer></Footer>
              </>
            }
          ></Route>
          <Route path="/tasklist" element = {
            <>
            <Header></Header>
            <Tasklist Task={Task} setTask={setTask}></Tasklist>
            <Footer></Footer>
            </>
          }></Route>
      </Routes>
        </div>
    </>
  );
}

export default App;
