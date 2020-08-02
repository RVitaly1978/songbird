import React from 'react';
import styled from 'styled-components';

import { device } from '../../style/media';

const PaginationContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  border-radius: 0.25rem;
  overflow: hidden;
`;

const PaginationItem = styled.li`
  flex: auto;
`;

const PaginationData = styled.p`
  display: inline-block;

  width: 100%;
  padding: 1rem 1.5rem;

  background-color: #303030;
  border: 0.25px solid #444;

  text-align: center;

  @media ${device.mobileM} {
    padding: 0.75rem 1.0rem;

    font-size: 0.85em;
  }
`;

PaginationContainer.displayName = 'PaginationContainerStyled';
PaginationItem.displayName = 'PaginationItemStyled';
PaginationData.displayName = 'PaginationDataStyled';

const Pagination = () => {
  return (
    <PaginationContainer>
      <PaginationItem>
        <PaginationData>Разминка</PaginationData>
      </PaginationItem>
      <PaginationItem>
        <PaginationData>Воробьиные</PaginationData>
      </PaginationItem>
      <PaginationItem>
        <PaginationData>Лесные птицы</PaginationData>
      </PaginationItem>
      <PaginationItem>
        <PaginationData>Певчие птицы</PaginationData>
      </PaginationItem>
      <PaginationItem>
        <PaginationData>Хищные птицы</PaginationData>
      </PaginationItem>
      <PaginationItem>
        <PaginationData>Морские птицы</PaginationData>
      </PaginationItem>
    </PaginationContainer>
  );
};

export default Pagination;
