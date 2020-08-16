import React, { useEffect, useRef } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { device } from '../../styles/media';
import { fadeInAnimation } from '../../styles/animation';
import newGame, {
  selectAnswer, restartGame, nextLevel, addNotification,
} from '../../store/action-creators';
import { getRandomInRange, getActiveLevelList, stopAudio, setAudioVolume } from '../../helpers';

import winSound from '../../../public/winSound.mp3';
import correctSound from '../../../public/correctSound.mp3';
import errorSound from '../../../public/errorSound.mp3';

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

const mapStateToProps = ({
  data, levels, activeLevel, answers, correctAnswer, activeAnswer, hasCorrect, score, maxScore, notifications,
}) => {
  return {
    data,
    levels,
    activeLevel,
    answers,
    correctAnswer,
    activeAnswer,
    hasCorrect,
    score,
    maxScore,
    notifications,
  };
};

const mapDispatchToProps = (dispatch) => ({
  selectAnswer: (state) => dispatch(selectAnswer(state)),
  nextLevel: (state) => dispatch(nextLevel(state)),
  restartGame: () => dispatch(restartGame()),
  newGame: () => dispatch(newGame()),
  addNotification: (notification) => dispatch(addNotification(notification)),
});

const Home = ({
  data, levels, activeLevel, answers, correctAnswer, activeAnswer, hasCorrect, score, maxScore, notifications,
  selectAnswer, nextLevel, restartGame, newGame, addNotification,
  volumeSound = 0.5, mutedSound = false,
}) => {
  const history = useHistory();

  const audioWinRef = useRef();
  const audioErrorRef = useRef();
  const audioCorrectRef = useRef();
  const audioRandomBirdRef = useRef();
  const audioDataInfoRef = useRef();

  console.log(`правильный ответ ${activeLevel} уровня ---`, correctAnswer);

  const handleSelectAnswerClick = (id) => {
    stopAudio(
      audioCorrectRef.current,
      audioErrorRef.current,
    );

    const newState = {
      activeAnswer: id,
    };

    if (!hasCorrect) {
      newState.answers = [...answers, id];

      if (id === correctAnswer) {
        newState.hasCorrect = true;
        newState.levels = [...levels, activeLevel];

        const activeLevelList = getActiveLevelList(data, activeLevel);
        const newScore = activeLevelList.data.length - answers.length - 1;
        newState.maxScore = (levels.length + 1) * 5;
        newState.score = score + newScore;

        stopAudio(audioRandomBirdRef.current.audio.current);
        audioCorrectRef.current.play();
      } else {
        audioErrorRef.current.play();
      }
    }

    selectAnswer(newState);
  };

  const handleNextLevelClick = () => {
    stopAudio(
      audioCorrectRef.current,
      audioErrorRef.current,
      audioRandomBirdRef.current.audio.current,
      audioDataInfoRef.current.audio.current,
    );

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
    stopAudio(audioWinRef.current);

    const { id } = evt.target;

    if (id === 'RESTART_GAME') {
      restartGame();
    } else if (id === 'NEW_GAME') {
      newGame();
      history.push('/');
    }
  };

  const handleAudioError = (evt) => {
    const { id } = evt.target;

    addNotification({
      id: `${id}-${new Date()}`,
      type: 'error',
      notification: `Sorry, we couldn't upload the ${id} effect`,
    });
  };

  useEffect(() => {
    setAudioVolume(volumeSound, audioWinRef.current, audioErrorRef.current, audioCorrectRef.current);
  }, [volumeSound]);

  if ((data.length > 0) && (activeLevel === null)) {
    return (
      <HomePage>
        <Header />
        <GameOver
          score={score}
          maxScore={maxScore}
          onClick={handleGameOverClick}
        />
        <audio
          id='winSound'
          ref={audioWinRef}
          src={winSound}
          muted={mutedSound}
          autoPlay={true}
          loop={true}
          onError={handleAudioError}
        ><track kind='captions' /></audio>
        {(notifications.length > 0) && <NotificationList notifications={notifications} />}
      </HomePage>
    );
  }

  const HomePageElement = (
    <HomePage>
      <Header />
      <RandomBird audioRef={audioRandomBirdRef} onAudioError={handleAudioError} />
      <RowLayout>
        <ColumnLayout>
          <DataList
            data={data}
            activeLevel={activeLevel}
            answers={answers}
            correctAnswer={correctAnswer}
            activeAnswer={activeAnswer}
            onClick={handleSelectAnswerClick}
          />
        </ColumnLayout>
        <ColumnLayout>
          <DataInfo audioRef={audioDataInfoRef} onAudioError={handleAudioError} />
        </ColumnLayout>
      </RowLayout>
      <NextButton
        isDisabled={!hasCorrect}
        onClick={handleNextLevelClick}
      />
      <audio
        id='correctSound'
        ref={audioCorrectRef}
        src={correctSound}
        muted={mutedSound}
        onError={handleAudioError}
      ><track kind='captions' /></audio>
      <audio
        id='errorSound'
        ref={audioErrorRef}
        src={errorSound}
        muted={mutedSound}
        onError={handleAudioError}
      ><track kind='captions' /></audio>
      {(notifications.length > 0) && <NotificationList notifications={notifications} />}
    </HomePage>
  );

  return (
    (data.length > 0)
      ? HomePageElement
      : <Redirect to='/promo' />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
