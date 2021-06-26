import React from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import styled from 'styled-components';

export const SearchBar = ({ handleChange }) => {
  return (
    <Wrap>
      <Search onChange={handleChange} />
      <SearchIcon>
        <BiSearchAlt2 />
      </SearchIcon>
    </Wrap>
  );
};

const Wrap = styled.div`
  padding-left: 20px;
  z-index: 1;
`;

const Search = styled.input.attrs({
  type: 'text',
  autocomplete: 'off',
})`
  padding-left: 30px;
  width: 250px;
  height: 40px;
  color: ${props => props.theme.deepGray};
  border: 1px solid ${props => props.theme.deepGray};
  border-radius: 2px;
  font-size: 18px;
`;

const SearchIcon = styled.div`
  position: absolute;
  top: 12px;
  left: 30px;

  svg {
    width: 20px;
    height: 20px;
    color: ${props => props.theme.deepGray};
  }
`;
