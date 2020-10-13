import React from 'react';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
            <Link to='/protected'>Protected Page </Link>
            <Link to='/'>Login</Link>
        <Switch>
        <Route exact path='/' component={Login} />
        <PrivateRoute exact path='/protected' component={FriendsList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
