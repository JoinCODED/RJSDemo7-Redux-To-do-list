import {CHANGE_STATUS, DELETE_TASK, SET_TASKS} from '../actions/actionTypes';

const initialState = {
  tasks: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TASKS:
      const tasks = action.payload
      return {
        ...state,
        tasks: tasks
      }
      
    case CHANGE_STATUS:
      const taskToChange = action.payload;
      return { 
        ...state,
        tasks: state.tasks.map(task => task !== taskToChange ? task : {...task, done: !task.done}
        )
      }

    case DELETE_TASK:
      const taskToDelete = action.payload;
      return { 
        ...state,
        tasks: state.tasks.filter(task => task !== taskToDelete)
      }

    default:
      return state
  }
}
