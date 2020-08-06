import React from 'react';
import styled from 'styled-components';

import { device } from '../../styles/media';

const PaginationContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  border-radius: ${props => props.theme.all.borderRadius};

  overflow: hidden;
`;

const PaginationItem = styled.li`
  flex: auto;
`;

const PaginationData = styled.p`
  display: inline-block;

  width: 100%;
  padding: 1rem 1.5rem;

  background-color: ${(props) => {
    if (props.passed) {
      return props.theme.secondary.color;
    }
    return (props.active
      ? props.theme.main.borderColor
      : props.theme.main.bgColor
    );
  }};

  border: 0.25px solid ${props => props.theme.main.borderColor};

  text-align: center;
  text-transform: capitalize;

  transition: background-color 0.3s linear;

  @media ${device.mobileM} {
    padding: 0.75rem 1.0rem;

    font-size: 0.85em;
  }
`;

PaginationContainer.displayName = 'PaginationContainerStyled';
PaginationItem.displayName = 'PaginationItemStyled';
PaginationData.displayName = 'PaginationDataStyled';

const Pagination = (props) => {
  const { data, levels, activeLevel } = props;

  const levelsList = data.map((dataItem) => {
    const level = dataItem.id;
    const isActive = (level === activeLevel);
    const hasPassed = levels.includes(level);
    return (
      <PaginationItem key={level}>
        <PaginationData active={isActive} passed={hasPassed}>{dataItem.name}</PaginationData>
      </PaginationItem>
    );
  });

  return (
    <PaginationContainer>
      {levelsList}
    </PaginationContainer>
  );
};

export default Pagination;
