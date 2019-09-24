import React from "react";

// Components
import ToDoItem from "./ToDoItem";

function ToDoList(props) {
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
        </tr>
      </thead>
      <tbody>{itemRows}</tbody>
    </table>
  );
}
export default ToDoList;
