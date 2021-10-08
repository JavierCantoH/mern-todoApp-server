import React from 'react';
// react router
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// components
import Todos from './components/todos/Todos';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import NavBar from './components/navbar/Navbar';
// material ui
import { Container } from '@material-ui/core';
// material ui styles
import { makeStyles } from "@material-ui/core/styles";
// react toast container for notifications
import { ToastContainer } from "react-toastify";
// toastify css
import "react-toastify/dist/ReactToastify.css";

// material ui styles
const useStyles = makeStyles({
  contentStyle: {
    margin: "30px auto",
  }
});

function App() {
  const classes = useStyles();
  return (
    <>
      <BrowserRouter>
      <ToastContainer/>
        <Container maxWidth = "md">
          <NavBar />
          <Container className={classes.contentStyle} maxWidth = "sm">
            <Switch>
                <Route path="/signin" component={SignIn} />
                <Route path="/signup" component={SignUp} />
                <Route path="/" component={Todos} />
            </Switch>
          </Container>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
