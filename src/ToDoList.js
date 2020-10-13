import React from "react";
import { connect } from "react-redux";

// Components
import ToDoItem from "./ToDoItem";

const ToDoList = props => {
  const itemRows = props.items.map(item => (
    <ToDoItem item={item} key={item.task} />
  ));

  return (
    <table className="table">
      <thead>
        <tr className="headerRow">
          <th>STATUS</th>
          <th>TASK</th>
          <th>PRIORITY</th>
          <th>DELETE</th>
        </tr>
      </thead>
      <tbody>{itemRows}</tbody>
    </table>
  );
};

const mapStateToProps = state => {
  return {
    items: state.tasks
  };
};

export default connect(mapStateToProps)(ToDoList);
