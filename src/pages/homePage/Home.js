import React from 'react';
import styled from 'styled-components';

import Header from '../../components/header/index';
import RandomBird from '../../components/randomBird/index';

const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  height: 100vh;
  padding: 1rem 0;

  user-select: none;
`;

HomePage.displayName = 'HomePageStyled';

const Home = () => (
  <HomePage>
    <Header />
    <RandomBird />
  </HomePage>
);

export default Home;
