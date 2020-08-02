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

  transition: background-color 0.3s linear;

  cursor: pointer;

  @media (pointer: fine) {
    :hover {
      background-color: #444;
    }
  }

  & + & {
    border-top: 1px solid #444;
  }
`;

const DataIndicator = styled.span`
  display: inline-block;

  width: 1.0rem;
  height: 1.0rem;
  margin-right: 1.5rem;

  background-color: #444;
  border-radius: 50%;
`;

DataContainer.displayName = 'DataContainerStyled';
DataItem.displayName = 'DataItemStyled';
DataIndicator.displayName = 'DataIndicatorStyled';

const DataList = () => {
  return (
    <DataContainer>
      <DataItem>
        <DataIndicator />
        Ворон
      </DataItem>
      <DataItem>
        <DataIndicator />
        Журавль
      </DataItem>
      <DataItem>
        <DataIndicator />
        Ласточка
      </DataItem>
      <DataItem>
        <DataIndicator />
        Козодой
      </DataItem>
      <DataItem>
        <DataIndicator />
        Кукушка
      </DataItem>
      <DataItem>
        <DataIndicator />
        Синица
      </DataItem>
    </DataContainer>
  );
};

export default DataList;
