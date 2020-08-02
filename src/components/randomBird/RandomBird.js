import React from 'react';
import styled from 'styled-components';

// import Pagination from '../pagination/index';

const RandomBirdContainer = styled.div`
  display: flex;

  width: 100%;
  margin-top: 2rem;
  padding: 1rem;

  background-color: #303030;
  border: 1px solid #444;
  border-radius: 0.25rem;
`;

RandomBirdContainer.displayName = 'RandomBirdContainerStyled';

const RandomBird = () => {
  return (
    <RandomBirdContainer>
      oooooo
    </RandomBirdContainer>
  );
};

export default RandomBird;
