import React from 'react';
import styled from 'styled-components';

export const Nav = () => {
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <Wrap>
      <Title onClick={reloadPage}>Infinite Scroll</Title>
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
  width: 300px;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
`;
