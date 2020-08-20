import React, { useEffect, useRef } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { device } from '../../styles/media';
import { fadeInAnimation } from '../../styles/animation';
import newGame, {
  selectAnswer, restartGame, nextLevel, addNotification,
} from '../../store/action-creators';
import {
  getRandomInRange, getActiveLevelList, stopAudio, playAudio, pauseAudioFiltered, setAudioVolume,
} from '../../helpers';

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
  background-color: ${props => props.theme.main.bgColor};
  border: 1px solid ${props => props.theme.main.borderColor};
  border-radius: ${props => props.theme.all.borderRadius};

  overflow: hidden;

  &:first-child {
    width: calc((100% - ${props => props.theme.all.margin}) * 0.4);

    @media ${device.mobileL} {
      width: 100%;
    }
  }

  &:last-child {
    width: calc((100% - ${props => props.theme.all.margin}) * 0.6);

    @media ${device.mobileL} {
      width: 100%;
    }
  }

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
  data, levels, activeLevel, answers, correctAnswer, activeAnswer,
  hasCorrect, score, maxScore, notifications, soundVolumeSettings,
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
    soundVolumeSettings,
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
  selectAnswer, nextLevel, restartGame, newGame, addNotification, soundVolumeSettings,
  volumeSound = 0.5, mutedSound = false,
}) => {
  const history = useHistory();

  const audioWinRef = useRef();
  const audioErrorRef = useRef();
  const audioCorrectRef = useRef();
  const audioRandomBirdRef = useRef();
  const audioDataInfoRef = useRef();

  const handleSelectAnswerClick = (id) => {
    stopAudio(
      audioCorrectRef.current,
      audioErrorRef.current,
    );

    const newState = {
      activeAnswer: id,
    };

    if (!hasCorrect && !answers.includes(id)) {
      newState.answers = [...answers, id];

      if (id === correctAnswer) {
        newState.hasCorrect = true;
        newState.levels = [...levels, activeLevel];

        const activeLevelList = getActiveLevelList(data, activeLevel);
        const newScore = activeLevelList.data.length - answers.length - 1;
        newState.maxScore = (levels.length + 1) * 5;
        newState.score = score + newScore;

        stopAudio(audioRandomBirdRef.current.audio.current);
        playAudio(audioCorrectRef.current);
      } else {
        playAudio(audioErrorRef.current);
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
      id: `${id}-${getRandomInRange(1000)}-${new Date()}`,
      type: 'error',
      notification: `Sorry, we couldn't upload the ${id} effect`,
    });
  };

  const handleAudioPlay = (evt) => {
    const { id } = evt.target;
    pauseAudioFiltered(
      id,
      audioRandomBirdRef.current,
      audioDataInfoRef.current,
    );
  };

  const { mute, volume } = soundVolumeSettings;

  useEffect(() => {
    setAudioVolume(volume, audioWinRef.current, audioErrorRef.current, audioCorrectRef.current);
  }, [volume]);

  if ((data.length > 0) && (activeLevel === null)) {
    return (
      <HomePage>
        <Header />
        <GameOver
          score={score}
          maxScore={maxScore}
          onClick={handleGameOverClick}
        />
        {(score === maxScore)
          && <audio
            id='winSound'
            ref={audioWinRef}
            src={winSound}
            muted={mute}
            autoPlay={true}
            loop={true}
            onError={handleAudioError}
          ><track kind='captions' /></audio>
        }
        {(notifications.length > 0)
          && <NotificationList notifications={notifications} />
        }
      </HomePage>
    );
  }

  const HomePageElement = (
    <HomePage>
      <Header />
      <RandomBird
        audioRef={audioRandomBirdRef}
        onAudioError={handleAudioError}
        onAudioPlay={handleAudioPlay}
      />
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
          <DataInfo
            audioRef={audioDataInfoRef}
            onAudioError={handleAudioError}
            onAudioPlay={handleAudioPlay}
          />
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
        muted={mute}
        onError={handleAudioError}
      ><track kind='captions' /></audio>
      <audio
        id='errorSound'
        ref={audioErrorRef}
        src={errorSound}
        muted={mute}
        onError={handleAudioError}
      ><track kind='captions' /></audio>
      {(notifications.length > 0)
        && <NotificationList notifications={notifications} />
      }
    </HomePage>
  );

  if (data.length > 0) {
    console.log(`правильный ответ ${activeLevel} уровня ---`, correctAnswer);
  }

  return (
    (data.length > 0)
      ? HomePageElement
      : <Redirect to='/promo' />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
