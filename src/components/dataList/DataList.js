import React from 'react';
import styled from 'styled-components';

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

const DataList = (props) => {
  const { data, activeLevel, correct, answers, active, hasCorrect, setActive, setAnswers, setHasCorrect, setScore } = props;

  const groupItems = [];
  const group = data[activeLevel];
  group.forEach((groupItem) => {
    const isCorrect = (groupItem.id === correct);
    const isAnswered = answers.includes(groupItem.id);
    const isActive = (groupItem.id === active);
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

    setActive(id);
    if (!hasCorrect) {
      setAnswers([...answers, id]);
      setHasCorrect(id === correct);

      if (id === correct) {
        const score = group.length - answers.length - 1;
        setScore(score);
      }
    }
  };

  return (
    <DataContainer onClick={clickHandler}>
      {groupItems}
    </DataContainer>
  );
};

export default DataList;
