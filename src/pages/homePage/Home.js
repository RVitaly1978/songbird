import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { device } from '../../styles/media';

import Header from '../../components/header/index';
import RandomBird from '../../components/randomBird/index';
import DataList from '../../components/dataList/index';
import DataInfo from '../../components/dataInfo/index';
import NextButton from '../../components/nextButton/index';
import GameOver from '../../components/gameOver/index';

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

const mapStateToProps = ({ hasCorrect, activeLevel, score, maxScore }) => {
  return {
    hasCorrect,
    activeLevel,
    score,
    maxScore,
  };
};

const nextLevel = () => ({
  type: 'NEXT_LEVEL',
});

const restartGame = () => ({
  type: 'RESTART_GAME',
});

const newGame = () => ({
  type: 'NEW_GAME',
});

const mapDispatchToProps = (dispatch) => ({
  nextLevel: () => dispatch(nextLevel()),
  restartGame: () => dispatch(restartGame()),
  newGame: () => dispatch(newGame()),
});

const Home = ({ hasCorrect, activeLevel, score, maxScore, nextLevel, restartGame, newGame }) => {
  const [redirect, setRedirect] = useState(false);

  const handleNextLevelClick = () => {
    nextLevel();
  };

  const handleGameOverClick = (evt) => {
    const { id } = evt.target;

    if (id === 'RESTART_GAME') {
      restartGame();
    } else if (id === 'NEW_GAME') {
      newGame();
      setRedirect(true);
    }
  };

  if (redirect) {
    return (
      <Redirect to='/' />
    );
  }

  if (activeLevel === null) {
    return (
      <HomePage>
        <Header />
        <GameOver
          score={score}
          maxScore={maxScore}
          onClick={handleGameOverClick}
        />
      </HomePage>
    );
  }

  return (
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
      <NextButton
        id='next'
        label='Next Level'
        isDisabled={!hasCorrect}
        onClick={handleNextLevelClick}
      />
    </HomePage>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
