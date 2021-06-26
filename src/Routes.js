import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserList from './Page/UserList';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={() => <UserList />} />
      </Switch>
    </Router>
  );
}

export default Routes;
