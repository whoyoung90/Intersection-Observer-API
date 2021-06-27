import React, { useState } from 'react';
import { Modal } from './Modal';
import styled from 'styled-components';

export const Members = ({ findName }) => {
  const [isModalView, setModalView] = useState(false);
  const [pickId, setPickId] = useState('');

  const handleChange = () => {
    setModalView(!isModalView);
  };

  const idCheck = el => {
    setPickId(el);
  };

  return (
    <>
      <Wrap>
        {findName.map((data, idx) => (
          <div key={idx} onClick={() => idCheck(data.id)}>
            <MemberCard onClick={handleChange}>
              <Img src={data.avatar} />
              <Information>
                <Name>
                  {data.first_name}
                  {data.last_name}
                </Name>
                <Email>{data.email}</Email>
              </Information>
            </MemberCard>
          </div>
        ))}
      </Wrap>
      {isModalView && <Modal id={pickId} handleChange={handleChange} />}
    </>
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
  margin: 25px;
  width: 195px;
  height: 230px;
  border: 1px solid ${props => props.theme.gray};
  border-radius: 3px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.15);

  &:hover {
    cursor: pointer;
  }
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
