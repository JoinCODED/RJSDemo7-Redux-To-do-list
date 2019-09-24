import {CHANGE_STATUS, DELETE_TASK} from '../actions/actionTypes';

// Data
import tasks from '../../data';

const initialState = {
  tasks: tasks
}

export default (state = initialState, action) => {
  switch (action.type) {
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
