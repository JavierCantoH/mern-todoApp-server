import React from 'react';
// react router
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// components
import Todos from './components/todos/Todos';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import NavBar from './components/navbar/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
          <NavBar />
            <Switch>
              <Route path="/signin" component={SignIn} />
              <Route path="/signup" component={SignUp} />
              <Route path="/" component={Todos} />
            </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
