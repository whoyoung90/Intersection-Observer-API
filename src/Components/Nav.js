import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';

export const Nav = () => {
  const history = useHistory();
  const goToMain = () => {
    history.push('/');
  };
  return (
    <Wrap>
      <Title onClick={goToMain}>DDIVE</Title>
    </Wrap>
  );
};

const Wrap = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  z-index: 10;
`;
const Title = styled.div`
  padding: 20px;
  width: 100px;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
`;
