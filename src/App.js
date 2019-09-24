import React, { Component } from "react";
import axios from "axios";

import "font-awesome/css/font-awesome.min.css";
import "./App.css";

// Components
import ToDoList from "./ToDoList";

class App extends Component {
  // state = {
  //   tasks: []
  // };

  // async componentDidMount() {
  //   try {
  //     const response = await axios.get("http://127.0.0.1:8000/api/tasks/");
  //     const tasks = response.data;
  //     this.setState({ tasks: tasks });
  //   } catch (err) {
  //     console.error("SOMETHING WENT WRONG: ", err);
  //   }
  // }

  render() {
    return (
      <div className="rectangle">
        <p className="title">TO DO LIST</p>
        <ToDoList />
      </div>
    );
  }
}

export default App;
