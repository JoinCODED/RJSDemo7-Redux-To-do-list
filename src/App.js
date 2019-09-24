import React from "react";

import "font-awesome/css/font-awesome.min.css";
import "./App.css";

// Data
import items from "./data";

//Components
import ToDoList from "./ToDoList";

function App() {
  return (
    <div className="rectangle">
      <p className="title">TO DO LIST</p>
      <ToDoList items={items} />
    </div>
  );
}

export default App;
