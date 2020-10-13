import React from "react";
import { connect } from "react-redux";

import "./App.css";

// Actions
import { changeStatus } from "./redux/actions";
import { deleteTask } from "./redux/actions";

const ToDoItem = props => {
  const item = props.item;

  return (
    <tr className="row">
      <td onClick={() => props.changeStatus(item)}>
        <i className={`fa fa-${item.done ? "check" : "times"}-circle`} />
      </td>
      <td>{item.task}</td>
      <td className={item.priority}>{item.priority.toUpperCase()}</td>
      <td onClick={() => props.deleteTask(item)}>
        <i className="fa fa-times" />
      </td>
    </tr>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    changeStatus: task => dispatch(changeStatus(task)),
    deleteTask: task => dispatch(deleteTask(task))
  };
};

export default connect(null, mapDispatchToProps)(ToDoItem);
