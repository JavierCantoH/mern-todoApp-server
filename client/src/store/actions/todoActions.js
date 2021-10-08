// impor axios
import axios from "axios";
// import url end point to connect server side api
import { url } from "../../api";


// action creator for adding a new todo
export const addTodo = (todo) => {
    // using redux thunk accessing the store
    return (dispatch, getState) => {
        // perform an async action using axios
      
      axios
      // post parameter (endpoint, body of our req)
        .post(`${url}/todos`, todo)
        // .then is our async function
        // when is recieed in the backend it will be added to the data base 
        //and then we get a respnse which is the todo that was added to the db
        .then((todo) => {
          dispatch({
              // ADD_TODO from reducers
            type: "ADD_TODO",
            todo,
          });
        })
        .catch((error) => {
          console.log(error.response);
        });
    };
  };
