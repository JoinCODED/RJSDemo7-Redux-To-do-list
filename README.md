# Intro

Walk through of the codebase. This is the to-do list wired with redux. But right now all the data is local! (show commented out axios request)

# Do it the stupid way first

(RUN THE [SERVER](https://github.com/JoinCODED/RJSDemo5-To-do-list-BackEnd))

The poor man's Thunk:

1. Add a `SET_TASKS` type to `redux/actions/actionTypes.js`

2. Create an action in `redux/actions/tasks.js`:

   ```javascript
   export const setTasks = tasks => {
     return {
       type: SET_TASKS,
       payload: tasks
     };
   };
   ```

3. Connect it in `App.js`:

   ```javascript
   const mapDispatchToProps = dispatch => {
     return {
       setTasks: tasks => dispatch(setTasks(tasks))
     };
   };
   ```

4. Call it after data loads in `App.js`:

   ```javascript
   async componentDidMount() {
     try {
       const response = await axios.get("http://127.0.0.1:8000/api/tasks/");
       const tasks = response.data;
       this.props.setTasks(tasks)
     } catch (err) {
       console.error("SOMETHING WENT WRONG: ", err);
     }
   }
   ```

5. Update the reducer in `redux/reducers/tasks.js`

   ```javascript
   case SET_TASKS:
     const tasks = action.payload
     return {
       ...state,
       tasks: tasks
     }
   ```

# The Problem with Async

What we did is fine, but it would be nice if we could clean up the messy `componentDidMount` in `App.js` and move it somewhere else, like our redux actions.

6. Attempt this. Copy axios request to a new action in `actions/tasks.js`:

   ```javascript
   export const fetchTasks = () => {
     try {
       const response = await axios.get("http://127.0.0.1:8000/api/tasks/");
       const tasks = response.data;
       return {
         type: SET_TASKS,
         payload: tasks
       }
     } catch (err) {
       console.error("SOMETHING WENT WRONG: ", err);
     }
   }
   ```

7. Connect it to `App.js` and call it in `componentDidMount`:

   ```javascript
   componentDidMount() {
     this.props.fetchTasks();
   }
   ```

   It won't work because we can't use `await` in a function that's not `async`

8. Make the function `async`. Still breaks. Now `fetchTasks` is no longer a valid redux action function because it acutally returns a promise! (all async functions return promises)

# Thunk

We need something extra to handle async code in redux

9. Add the redux-thunk package `yarn add redux-thunk`

10. In `redux/index.js`:

    ```javascript
    import { applyMiddleware } from "redux";
    import thunk from "redux-thunk";

    const store = createStore(
      rootReducer,
      composeEnhancers(applyMiddleware(thunk))
    );
    ```

# Handling Async Code

Thunk gives us the option to return an `async` function from our action creators instead of a plain object. This function will get given...`dispatch`!

11. Fix `fetchTasks` in `actions/tasks.js`:

    ```javascript
    export const fetchTasks = () => {
      return async dispatch => {
        try {
          const response = await axios.get("http://127.0.0.1:8000/api/tasks/");
          const tasks = response.data;
          dispatch({
            type: SET_TASKS,
            payload: tasks
          });
        } catch (err) {
          console.error("SOMETHING WENT WRONG: ", err);
        }
      };
    };
    ```

# An added improvement

Right now we're fetching when the `App` mounts. We actually have the option to fetch much earlier.

12. Remove the `componentDidMount`

13. In `redux/index.js` import the action and call `store.dispatch` before initial render:

    ```javascript
    import { fetchTasks } from "./actions";

    ...

    store.dispatch(fetchTasks())
    ```

# TODO: Change Status and Delete
