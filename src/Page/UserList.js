import React from 'react';
import { Nav } from '../Components/Nav';
import { SearchBar } from '../Components/SearchBar';
import { Members } from '../Components/Members';
import styled from 'styled-components';

function UserList({ findName, handleChange }) {
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
