import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const DataContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 100%;

  border-radius: inherit;
`;

const DataItem = styled.li`
  padding: 1.25rem 2.0rem;

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

const mapStateToProps = ({ data, activeLevel, answers, correctAnswer, activeAnswer }) => {
  return {
    data,
    activeLevel,
    answers,
    correctAnswer,
    activeAnswer,
  };
};

const selectAnswer = (id) => ({
  type: 'SELECT_ANSWER',
  id,
});

const mapDispatchToProps = (dispatch) => ({
  selectAnswer: (id) => dispatch(selectAnswer(id))
});

const DataList = (props) => {
  const {
    data, activeLevel, answers, correctAnswer, activeAnswer, selectAnswer
  } = props;

  const groupItems = [];
  const group = data[activeLevel];
  group.forEach((groupItem) => {
    const isCorrect = (groupItem.id === correctAnswer);
    const isAnswered = answers.includes(groupItem.id);
    const isActive = (groupItem.id === activeAnswer);
    const element = (
      <DataItem key={groupItem.id} id={groupItem.id} active={isActive}>
        <DataIndicator correct={isCorrect} answered={isAnswered}/>
        {groupItem.name}
      </DataItem>
    );
    groupItems.push(element);
  });

  const clickHandler = (evt) => {
    const id = Number(evt.target.id);
    selectAnswer(id);
  };

  return (
    <DataContainer onClick={clickHandler}>
      {groupItems}
    </DataContainer>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DataList);
