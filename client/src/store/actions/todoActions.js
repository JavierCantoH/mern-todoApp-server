// impor axios
import axios from "axios";
// import url end point to connect server side api
import { url } from "../../api";

// GETTING ALL TODOS action creator
export const getTodos = () => {
  // using redux thunk 
  return (dispatch) => {
    // perform an async action using axios
  axios
  // get parameter (endpoint)
    .get(`${url}/todos`)
    // .then is our async function
    // when is recieed in the backend it will be added to the data base 
    //and then we get a respnse which is the todo that was added to the db
    .then((todos) => {
      dispatch({
          // ADD_TODO from reducers
        type: "GET_TODOS",
        todos,
      });
    })
    .catch((error) => {
      console.log(error.response);
    });
};
};


// ADDING A NEW TODO action creator
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
