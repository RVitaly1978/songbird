import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { device } from '../../styles/media';

import Header from '../../components/header';
import RandomBird from '../../components/random-bird';
import DataList from '../../components/data-list';
import DataInfo from '../../components/data-info';
import NextButton from '../../components/next-button';
import GameOver from '../../components/game-over';

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

  & + & {
    align-self: stretch;
  }

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
  const history = useHistory();

  const handleNextLevelClick = () => {
    nextLevel();
  };

  const handleGameOverClick = (evt) => {
    const { id } = evt.target;

    if (id === 'RESTART_GAME') {
      restartGame();
    } else if (id === 'NEW_GAME') {
      newGame();
      history.push('/');
    }
  };

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
