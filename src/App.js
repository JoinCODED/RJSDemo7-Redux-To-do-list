import React, { useState, useEffect } from "react";
import axios from "axios";

import "font-awesome/css/font-awesome.min.css";
import "./App.css";

// Components
import ToDoList from "./ToDoList";

const App = () => {
  // const [tasks, setTasks] = useState([]);

  // useEffect(() => {
  //   const getTodoList = async () => {
  //     try {
  //       const response = await axios.get("http://127.0.0.1:8000/api/tasks/");
  //       const data = response.data;
  //       setTasks(data);
  //     } catch (err) {
  //       console.error("SOMETHING WENT WRONG: ", err);
  //     }
  //   };
  //   getTodoList();
  // }, []);

  return (
    <div className="rectangle">
      <p className="title">TO DO LIST</p>
      <ToDoList />
    </div>
  );
};

export default App;
