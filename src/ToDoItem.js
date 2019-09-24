import React, { Component } from "react";

import "./App.css";

class ToDoItem extends Component {
  state = {
    done: this.props.item.done
  };

  handleClick = () => {
    this.setState({ done: !this.state.done });
  };

  render() {
    const item = this.props.item;
    const statusIcon = done => {
      if (done) {
        return "fa fa-check-circle";
      } else {
        return "fa fa-times-circle";
      }
    };

    return (
      <tr className="row">
        <td onClick={this.handleClick}>
          <i className={statusIcon(this.state.done)} />
        </td>
        <td>{item.task}</td>
        <td className={item.priority}>{item.priority.toUpperCase()}</td>
      </tr>
    );
  }
}

export default ToDoItem;
