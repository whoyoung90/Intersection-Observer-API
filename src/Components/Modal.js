import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

export const Modal = ({ id, handleChange }) => {
  const [info, setInfo] = useState([]);

  const getInformation = () => {
    axios
      .get(`https://reqres.in/api/users/${id}`)
      .then(res => setInfo(res.data.data));
  };

  useEffect(() => {
    getInformation();
  }, []);

  return (
    <Wrap>
      <SubWrap>
        <Img src={info.avatar} />
        <div>
          <UserId>✔ 회원 번호 : {info.id}</UserId>
          <Name>
            ✔ 이름 : {info.first_name}
            {info.last_name}
          </Name>
          <UserEmail>✔ 이메일 : {info.email}</UserEmail>
        </div>
        <CloseBtn onClick={handleChange}>취소</CloseBtn>
      </SubWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background-color: ${props => props.theme.modalGray};
  z-index: 100;
`;

const SubWrap = styled.article`
  display: flex;
  flex-direction: column;
  align-items: inherit;
  width: 300px;
  height: 370px;
  padding-top: 20px;
  background-color: ${props => props.theme.white};

  div {
    padding-left: 5px;
  }
`;

const Img = styled.img`
  width: 200px;
  height: 200px;
  padding: 20px;
  object-fit: fill;
  border-radius: 50%;
`;
const UserId = styled.div`
  padding-bottom: 20px;
`;
const Name = styled.div`
  padding-bottom: 20px;
`;
const UserEmail = styled.div`
  padding-bottom: 20px;
`;

const CloseBtn = styled.button`
  border: none;
  outline: none;
  background-color: ${props => props.theme.gray};
  width: 300px;
  height: 40px;
  font-size: 14px;
  font-weight: bold;
  line-height: 20px;
`;
