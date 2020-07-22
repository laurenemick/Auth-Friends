import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <h2 className="navItem">My Friends List</h2>
          <div className="navItem">
            <Link className="navLink" to="/login">Login</Link>
          </div>
          <div className="navItem">
            <Link className="navLink" to="/protected">My Friends</Link>
          </div>
        </nav>
        <Switch>
          <PrivateRoute exact path="/protected" component={FriendsList} />
          <Route path="/login" component={Login} />{" "}
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
