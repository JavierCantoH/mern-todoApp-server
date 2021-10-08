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

function App() {
  return (
    <>
      <BrowserRouter>
        <Container maxWidth = "md">
          <NavBar />
            <Switch>
              <Route path="/signin" component={SignIn} />
              <Route path="/signup" component={SignUp} />
              <Route path="/" component={Todos} />
            </Switch>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
