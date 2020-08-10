import React from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { device } from '../../styles/media';
import { fadeInAnimation } from '../../styles/animation';
import newGame, { restartGame, nextLevel } from '../../store/action-creators';
import { getRandomInRange, getActiveLevelList } from '../../helpers';

import Header from '../../components/header';
import RandomBird from '../../components/random-bird';
import DataList from '../../components/data-list';
import DataInfo from '../../components/data-info';
import NextButton from '../../components/next-button';
import GameOver from '../../components/game-over';
import NotificationList from '../../components/notification-list';

const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  max-width: 140rem;
  min-height: 100vh;
  margin: 0 auto;
  padding: ${props => props.theme.all.padding};

  user-select: none;

  animation: ${fadeInAnimation} 0.3s linear;

  @media ${device.mobileL} {
    padding: ${props => props.theme.all.paddingMobile};
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

const mapStateToProps = ({ data, levels, hasCorrect, activeLevel, score, maxScore, notifications }) => {
  return {
    data,
    levels,
    hasCorrect,
    activeLevel,
    score,
    maxScore,
    notifications,
  };
};

const mapDispatchToProps = (dispatch) => ({
  nextLevel: (state) => dispatch(nextLevel(state)),
  restartGame: () => dispatch(restartGame()),
  newGame: () => dispatch(newGame()),
});

const Home = ({
  data, levels, hasCorrect, activeLevel, score, maxScore, notifications,
  nextLevel, restartGame, newGame,
}) => {
  const history = useHistory();

  const handleNextLevelClick = () => {
    const newState = {};
    const nextLevelIndex = levels.length;
    const maxLevelIndex = data.length - 1;

    if (nextLevelIndex <= maxLevelIndex) {
      newState.activeLevel = data[nextLevelIndex].id;
      newState.correctAnswer = getRandomInRange(
        getActiveLevelList(data, newState.activeLevel).data.length);
    } else {
      newState.activeLevel = null;
    }

    nextLevel(newState);
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

  if (data.length && (activeLevel === null)) {
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

  const HomePageElement = (
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
        isDisabled={!hasCorrect}
        onClick={handleNextLevelClick}
      />
      {notifications.length && <NotificationList notifications={notifications} />}
    </HomePage>
  );

  return (
    data.length
      ? HomePageElement
      : <Redirect to='/promo' />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
