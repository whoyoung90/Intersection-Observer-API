import React, { useState, useEffect } from 'react';
import { Nav } from '../Components/Nav';
import { SearchBar } from '../Components/SearchBar';
import { Members } from '../Components/Members';
import axios from 'axios';
import styled from 'styled-components';

function UserList() {
  const [memberShip, setMemberShip] = useState([]);
  const [userInput, setUserInput] = useState('');

  const fetchList = () => {
    axios
      .get('https://reqres.in/api/users?per_page=12&page=1')
      .then(res => setMemberShip(res.data.data));
  };

  const handleChange = e => {
    setUserInput(e.target.value);
  };

  useEffect(() => {
    fetchList();
  }, []);

  const findName = memberShip.filter(word =>
    word.first_name.concat(word.last_name).toLowerCase().includes(userInput)
  );

  return (
    <>
      <NavColor />
      <Wrap>
        <Nav />
        <SearchBar handleChange={handleChange} />
        <Members findName={findName} />
      </Wrap>
    </>
  );
}
export default UserList;

const NavColor = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  background-color: ${props => props.theme.deepGray};
  z-index: 10;
`;

const Wrap = styled.div`
  padding-top: 100px;
  margin: 0 auto;
  width: 1250px;
`;
