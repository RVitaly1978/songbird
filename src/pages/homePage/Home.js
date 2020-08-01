import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../../components/header/index';

const HomePage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;
  padding: 1rem;

  user-select: none;
`;

const Home = () => (
  <HomePage>
    <Header>
      <Link to='/promo'>Exit</Link>
    </Header>
  </HomePage>
);

export default Home;
