import { CHANGE_STATUS, DELETE_TASK } from "./actionTypes"

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