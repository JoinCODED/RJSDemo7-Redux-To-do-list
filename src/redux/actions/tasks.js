import { CHANGE_STATUS } from "./actionTypes"

export const changeStatus = task => {
  return {
    type: CHANGE_STATUS,
    payload: task
  }
}