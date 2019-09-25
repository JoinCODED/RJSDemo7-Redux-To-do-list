import axios from 'axios';

import { CHANGE_STATUS, DELETE_TASK, SET_TASKS } from "./actionTypes"

export const changeStatus = task => {
  return {
    type: CHANGE_STATUS,
    payload: task
  }
}

export const deleteTask = task => {
  return {
    type: DELETE_TASK,
    payload: task
  }
}

export const getTasks = () => {
  return async dispatch => { 
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/tasks/");
      const tasks = response.data;
      dispatch({
        type: SET_TASKS,
        payload: tasks
      })
    } catch (err) {
      console.error("SOMETHING WENT WRONG: ", err);
    }
  }
}
