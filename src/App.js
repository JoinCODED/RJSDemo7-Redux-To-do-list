import React from "react";
import {connect} from 'react-redux'

import "font-awesome/css/font-awesome.min.css";
import "./App.css";

// Components
import ToDoList from "./ToDoList";

// Actions
import { getTasks } from "./redux/actions/tasks";

function App() {
  return (
    <div className="rectangle">
      <p className="title">TO DO LIST</p>
      <ToDoList />
    </div>
  );
}


const mapDispatchToProps = dispatch => {
  return {
    getTasks: tasks => dispatch(getTasks(tasks))
  }
}


export default connect(null, mapDispatchToProps)(App);
