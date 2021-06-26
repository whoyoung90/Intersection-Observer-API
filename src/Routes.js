import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserList from './Page/UserList';
import axios from 'axios';

function Routes() {
  const [member, setMember] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const fetchList = () => {
    axios
      .get('https://reqres.in/api/users?per_page=12&page=1')
      .then(res => setMember(res.data.data));
  };

  useEffect(() => {
    fetchList();
  }, []);

  const handleChange = e => {
    setSearchInput(e.target.value);
  };

  const findName = member.filter(word =>
    word.first_name.toLowerCase().includes(searchInput)
  );
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <UserList findName={findName} handleChange={handleChange} />
          )}
        />
      </Switch>
    </Router>
  );
}

export default Routes;
