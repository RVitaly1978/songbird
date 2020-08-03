import React, { useState } from 'react';
import styled from 'styled-components';

import { device } from '../../styles/media';
import birdsDataBasic from '../../gameData/birdsDataBasic';

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
  max-width: 140rem;
  min-height: 100vh;
  margin: 0 auto;
  padding: ${props => props.theme.all.padding} 0;

  user-select: none;

  @media ${device.mobileL} {
    padding: ${props => props.theme.all.paddingMobile} 0;
  }
`;

const RowLayout = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  width: 100%;
  margin-top: ${props => props.theme.all.margin};

  user-select: none;

  @media ${device.mobileL} {
    flex-direction: column;
  }

  @media ${device.mobileM} {
    margin-top: ${props => props.theme.all.marginMobile};
  }
`;

const ColumnLayout = styled.div`
  width: calc((100% - ${props => props.theme.all.margin}) * 0.5);

  background-color: ${props => props.theme.main.bgColor};
  border: 1px solid ${props => props.theme.main.borderColor};
  border-radius: ${props => props.theme.all.borderRadius};

  overflow: hidden;

  @media ${device.mobileL} {
    width: 100%;

    & + & {
      margin-top: ${props => props.theme.all.margin};
    }
  }

  @media ${device.mobileM} {
    & + & {
      margin-top: ${props => props.theme.all.marginMobile};
    }
  }
`;

HomePage.displayName = 'HomePageStyled';
RowLayout.displayName = 'RowLayoutStyled';
ColumnLayout.displayName = 'ColumnLayoutStyled';

const Home = () => {
  const [active, setActive] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [hasCorrect, setHasCorrect] = useState(false);
  const [score, setScore] = useState(null);

  const gameProps = {
    data: birdsDataBasic,
    activeLevel: 'лесные',
    correct: 3,
    hasCorrect: hasCorrect,
    active: active,
    answers: answers,
    score: score,
  };

  return (
    <HomePage>
      <Header {...gameProps} />
      <RandomBird />
      <RowLayout>
        <ColumnLayout>
          <DataList {...gameProps} setActive={setActive} setAnswers={setAnswers} setHasCorrect={setHasCorrect} setScore={setScore} />
        </ColumnLayout>
        <ColumnLayout>
          <DataInfo />
        </ColumnLayout>
      </RowLayout>
      <NextButton isDisabled={!hasCorrect} id='next' label='Next Level' />
    </HomePage>
  );
};

export default Home;
