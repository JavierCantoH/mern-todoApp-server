// hit our backend api
export const url = "http://localhost:5000/api";

// function to set the headers of our req with a key for auth
export const setHeaders = () => {
    const headers = {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    };
    return headers;
};