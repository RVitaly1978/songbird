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

  background-color: ${props => props.active
    ? props.theme.main.borderColor
    : props.theme.main.bgColor};

  border: 0.25px solid ${props => props.theme.main.borderColor};

  text-align: center;
  text-transform: capitalize;

  @media ${device.mobileM} {
    padding: 0.75rem 1.0rem;

    font-size: 0.85em;
  }
`;

PaginationContainer.displayName = 'PaginationContainerStyled';
PaginationItem.displayName = 'PaginationItemStyled';
PaginationData.displayName = 'PaginationDataStyled';

const Pagination = (props) => {
  const { data, activeLevel } = props;

  const levels = [];
  Object.keys(data).forEach((level) => {
    const isActive = (level === activeLevel);
    const element = (
      <PaginationItem key={level}>
        <PaginationData active={isActive}>{level}</PaginationData>
      </PaginationItem>
    );
    levels.push(element);
  });

  return (
    <PaginationContainer>
      {levels}
    </PaginationContainer>
  );
};

export default Pagination;
