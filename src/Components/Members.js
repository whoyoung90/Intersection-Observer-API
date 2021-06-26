import React from 'react';
import styled from 'styled-components';

export const Members = ({ findName }) => {
  return (
    <Wrap>
      {findName.map((data, idx) => (
        <MemberCard key={idx}>
          <Img src={data.avatar} />
          <Information>
            <Name>
              {data.first_name}
              {data.last_name}
            </Name>
            <Email>{data.email}</Email>
          </Information>
        </MemberCard>
      ))}
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 50px auto;
  z-index: 1;
`;
const MemberCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px;
  width: 180px;
  height: 230px;
  border: 1px solid ${props => props.theme.gray};
  border-radius: 3px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.15);
`;
const Img = styled.img`
  width: 100%;
  height: 70%;
  object-fit: fill;
`;
const Information = styled.div`
  padding: 15px;
`;
const Name = styled.div`
  padding-bottom: 8px;
  font-size: 20px;
  font-weight: bold;
`;
const Email = styled.div`
  font-size: 14px;
`;
