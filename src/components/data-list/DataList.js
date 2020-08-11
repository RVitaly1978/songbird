import React, { useRef } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { selectAnswer } from '../../store/action-creators';
import { getActiveLevelList } from '../../helpers';
import { fadeInAnimation } from '../../styles/animation';
import { device } from '../../styles/media';

// import winSound from '../../../public/winSound.mp3';
// import errorSound from '../../../public/errorSound.mp3';

const DataContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 100%;

  border-radius: inherit;

  animation: ${fadeInAnimation} 0.3s linear;
`;

const DataItem = styled.li`
  padding: 1.75rem 2.0rem;

  background-color: ${props => props.active
    ? props.theme.main.borderColor
    : 'inherit'};

  transition: background-color 0.3s linear, box-shadow 0.1s linear;

  cursor: pointer;

  @media (pointer: fine) {
    :hover {
      box-shadow: inset 2px 2px 5px ${props => props.theme.main.borderColor},
                  inset -2px -2px 5px ${props => props.theme.main.borderColor};
    }
  }

  & + & {
    border-top: 1px solid ${props => props.theme.main.borderColor};
  }

  @media ${device.mobileL} {
    padding: 1.25rem 2.0rem;
  }
`;

const DataIndicator = styled.span`
  display: inline-block;

  width: 1.0rem;
  height: 1.0rem;
  margin-right: 1.5rem;

  background-color: ${(props) => {
    if (!props.answered) {
      return props.theme.main.borderColor;
    }
    return (props.correct
      ? props.theme.secondary.color
      : props.theme.all.errorColor
    );
  }};

  border-radius: 50%;

  pointer-events: none;
`;

DataContainer.displayName = 'DataContainerStyled';
DataItem.displayName = 'DataItemStyled';
DataIndicator.displayName = 'DataIndicatorStyled';

const mapStateToProps = ({
  data, levels, activeLevel, answers, correctAnswer, activeAnswer, hasCorrect, score, maxScore,
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
  };
};

const mapDispatchToProps = (dispatch) => ({
  selectAnswer: (state) => dispatch(selectAnswer(state))
});

const getComponentData = (dataObj, activeId) => {
  const data = dataObj
    .filter((dataItem) => dataItem.id === activeId)[0].data;

  return data;
};

const DataList = ({
  data, levels, activeLevel, answers, correctAnswer, activeAnswer, hasCorrect, score, maxScore,
  selectAnswer,
}) => {
  console.log(`правильный ответ ${activeLevel} уровня ---`, correctAnswer);

  // const audioWinRef = useRef();
  // const audioErrorRef = useRef();

  const elementsList = getComponentData(data, activeLevel)
    .map((item) => {
      const isCorrect = (item.id === correctAnswer);
      const isAnswered = answers.includes(item.id);
      const isActive = (item.id === activeAnswer);

      return (
        <DataItem key={item.id} id={item.id} active={isActive}>
          <DataIndicator correct={isCorrect} answered={isAnswered}/>
          {item.name}
        </DataItem>
      );
    });

  const clickHandler = (evt) => {
    const id = Number(evt.target.id);

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
      }
    }

    selectAnswer(newState);
  };

  return (
    <>
      <DataContainer onClick={clickHandler}>
        {elementsList}
      </DataContainer>
      {/* <audio
        id='winSound'
        ref={audioWinRef}
        src={winSound}
      ><track kind='captions' /></audio>
      <audio
        id='errorSound'
        ref={audioErrorRef}
        src={errorSound}
      ><track kind='captions' /></audio> */}
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DataList);
