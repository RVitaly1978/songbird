import React from 'react';
import styled from 'styled-components';

import { fadeInAnimation } from '../../styles/animation';
import { device } from '../../styles/media';

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

    font-weight: 700;

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

const getComponentData = (dataObj, activeId) => {
  const data = dataObj
    .filter((dataItem) => dataItem.id === activeId)[0].data;

  return data;
};

const DataList = ({
  data, activeLevel, answers, correctAnswer, activeAnswer, onClick,
}) => {
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
    onClick(id);
  };

  return (
    <DataContainer onMouseDown={clickHandler}>
      {elementsList}
    </DataContainer>
  );
};

export default DataList;
