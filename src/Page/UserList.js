import React, { useState, useEffect, useRef } from 'react';
import { Nav } from '../Components/Nav';
import { SearchBar } from '../Components/SearchBar';
import { Members } from '../Components/Members';
import axios from 'axios';
import styled from 'styled-components';

export default function UserList() {
  const [memberShip, setMemberShip] = useState([]);

  const [pageNumber, setPageNumber] = useState(0);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(false);
  const [noData, setNoData] = useState(false);

  const [userInput, setUserInput] = useState('');

  const fetchList = async pageNumber => {
    try {
      const res = await axios.get(
        `https://reqres.in/api/users?per_page=12&page=${pageNumber}`
      );
      setMemberShip(respond => [...respond, ...res.data.data]);
      setLoading(true);
    } catch (err) {
      console.log(err);
    } finally {
      setMessage(false);
      setTimeout(() => {
        setNoData(true);
      }, 2000);
    }
  };

  useEffect(() => {
    fetchList(pageNumber);
  }, [pageNumber]);

  const loadMore = () => {
    setPageNumber(prev => prev + 1);
  };

  /* 옵져버 정의 */
  const pageEnd = useRef();
  let num = 0;

  const observer = new IntersectionObserver(
    entries => {
      if (entries[0].isIntersecting) {
        num++;
        loadMore();
        if (num >= 2) {
          observer.unobserve(pageEnd.current);
        }
      }
    },
    { threshold: 1 }
  );

  /* 옵져버 실행*/
  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        observer.observe(pageEnd.current);
      }, 1500);

      setMessage(true);
    }
  }, [loading, num]);

  /* 검색 기능  */
  const handleChange = e => {
    setUserInput(e.target.value);
  };

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
        {message ? <Final>loading...</Final> : ''}
        {noData ? <Final>No Data Anymore ...</Final> : ''}
        <div ref={pageEnd}></div>
      </Wrap>
    </>
  );
}

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

const Final = styled.div`
  margin-bottom: 40px;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
`;
