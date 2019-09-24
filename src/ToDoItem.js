import React from "react";
import { connect } from 'react-redux'


import "./App.css";

// Actions
import { changeStatus } from "./redux/actions";

function ToDoItem(props) {

    const item = props.item;

    // console.log(item)

    const statusIcon = done => {
      if (done) {
        return "fa fa-check-circle";
      } else {
        return "fa fa-times-circle";
      }
    };

    return (
      <tr className="row">
        <td onClick={() => props.changeStatus(item)}>
          <i className={statusIcon(item.done)} />
        </td>
        <td>{item.task}</td>
        <td className={item.priority}>{item.priority.toUpperCase()}</td>
        <td><i className="fa fa-times" /></td>
      </tr>
    );
  }

  
  const mapDispatchToProps = dispatch => {
    return {
      changeStatus: task => dispatch(changeStatus(task))
    }
  }
  

export default connect(null, mapDispatchToProps)(ToDoItem);
