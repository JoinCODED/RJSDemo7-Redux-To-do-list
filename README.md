PRESENTATION: https://docs.google.com/presentation/d/1Kua0l4sS-RWstAyp7YMNYUg49G67CX0OAX8zoVFf-lg/edit#slide=id.p

BACKEND: https://github.com/JoinCODED/RJSDemo4-To-do-list-BackEnd

1. Run the backend - show it working with postman

2. install axios and import it

   ```bash
   yarn add axios
   ```

   ```javascript
   import axios from "axios";
   ```

3. Use axios to make a request - show this request getting recieved by the backend:

   ```jsx
   function App() {
     axios.get("http://localhost:8000/api/list");
     ...
   }

   ```

4. Log the thing being returned by the request:

   ```jsx
   const thing = axios.get("http://127.0.0.1:8000/api/list/");
   console.log("Axios returned: ", thing);
   ```

5. To access the ACTUAL repsonse, we need to wrap this code in a function. Demo `async/await` and log the response object THEN log `res.data`:

   ```jsx
   function App() {
     const getItems = async () => {
       const thing = await axios.get("http://localhost:8000/api/list");
       console.log(thing);
     }

     getItems();
     ...
   }
   ```

   to

   ```jsx
   function App() {
     const getItems = async () => {
       const response = await axios.get("http://localhost:8000/api/list");
       const data = response.data;
       console.log(data);
     }

     getItems();
     ...
   }
   ```

   to

   ```jsx
   function App() {
     const getItems = async () => {
       const thing = await axios.get("http://localhost:8000/api/list");
       const items = response.data;
       console.log(items);
     }

     getItems();
     ...
   }
   ```

6. Switch off the API to cause an error. Add a `try/catch`:

   ```jsx
   const getItems = async () => {
     try {
       const response = await axios.get("http://localhost:8000/api/list");
       const items = response.data;
       console.log(items);
     } catch (error) {
       console.error("SOMETHING WENT WRONG!");
       console.error(error);
     }
   };
   ```

7. Turn app into a class. Add a state variable for `itemsFromAPI`. Add `setState`. Show why this is bad (open the network tab on chrome and show the thousands of requests going through!):

   ```jsx
   const getItems = async () => {
     try {
       const response = await axios.get("http://localhost:8000/api/list");
       const items = response.data;
       console.log(items);
       this.setState({ itemsFromAPI: items });
     } catch (error) {
       console.error("SOMETHING WENT WRONG!");
       console.error(error);
     }
   };
   ```

8. Add `componentDidMount()`. Add logs to show WHEN it runs:

   ```jsx
   componentDidMount() {
     console.log("MOUNTED");
   }

   ...

   render() {
     console.log("RENDERING");
     ...
   }
   ```

9. Move the request into `componentDidMount` - don't forget to make it `async`:

   ```jsx
   async componentDidMount() {
       console.log("MOUNTED");
       try {
         const response = await axios.get("http://127.0.0.1:8000/api/list/");
         const items = response.data;
         this.setState({ itemsFromAPI: items });
       } catch (err) {
         console.error("SOMETHING WENT WRONG: ");
         console.error(err);
       }
   }
   ```
