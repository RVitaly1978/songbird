import React from 'react';
import styled from 'styled-components';

import { device } from '../../style/media';
import Header from '../../components/header/index';
import RandomBird from '../../components/randomBird/index';
import DataList from '../../components/dataList/index';
import DataInfo from '../../components/dataInfo/index';
import NextButton from '../../components/nextButton/index';

const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  max-width: 110rem;
  min-height: 100vh;
  margin: 0 auto;
  padding: 2rem 0;

  user-select: none;

  @media ${device.mobileL} {
    padding: 1rem 0;
  }
`;

const RowLayout = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  width: 100%;
  margin-top: 2rem;

  user-select: none;

  @media ${device.mobileL} {
    flex-direction: column;
  }

  @media ${device.mobileM} {
    margin-top: 1rem;
  }
`;

const ColumnLayout = styled.div`
  width: calc((100% - 2rem) * 0.5);

  background-color: #303030;
  border: 1px solid #444;
  border-radius: 0.25rem;

  overflow: hidden;

  @media ${device.mobileL} {
    width: 100%;

    & + & {
      margin-top: 2rem;
    }
  }

  @media ${device.mobileM} {
    & + & {
      margin-top: 1rem;
    }
  }
`;

HomePage.displayName = 'HomePageStyled';
RowLayout.displayName = 'RowLayoutStyled';
ColumnLayout.displayName = 'ColumnLayoutStyled';

const Home = () => (
  <HomePage>
    <Header />
    <RandomBird />
    <RowLayout>
      <ColumnLayout>
        <DataList />
      </ColumnLayout>
      <ColumnLayout>
        <DataInfo />
      </ColumnLayout>
    </RowLayout>
    <NextButton id='next' label='Next Level' />
  </HomePage>
);

export default Home;
