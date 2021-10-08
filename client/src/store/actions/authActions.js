// impor axios
import axios from "axios";
// import url end point to connect server side api
import { url } from "../../api";
// toastify messages
import { toast } from "react-toastify";

// SIGNUPS action creator
export const signUp = (user) => {
    // using redux thunk accessing the store
    return (dispatch, getState) => {
        // perform an async action using axios
      axios
      // post parameter (endpoint, body of our req)
        .post(`${url}/signup`, user)
        // .then is our async function
        // when is recieed in the backend it will be added to the data base 
        //and then we get a respnse which is the todo that was added to the db
        .then((token) => {
            // js object, store token in local storage
            // local storage for some persistency whenever we refresh the page or whenever we come back later and try to aces the app
            localStorage.setItem("token", token.data)

          dispatch({
              // ADD_TODO from reducers
            type: "SIGN_UP",
            token: token.data,
          });
        })
        .catch((error) => {
          console.log(error.response);
          // toastify messages notifications using optional changing operator
          toast.error(error.response?.data, {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        });
    };
};