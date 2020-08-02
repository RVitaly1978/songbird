import React from 'react';
import styled from 'styled-components';

import ImageComponent from '../imageComponent/index';
import TitleComponent from '../titleComponent/index';
import AudioComponent from '../audioComponent/index';

const RandomBirdContainer = styled.div`
  display: flex;

  width: 100%;
  margin-top: 2rem;
  padding: 1rem;

  background-color: #303030;
  border: 1px solid #444;
  border-radius: 0.25rem;
`;

const QuestionContainer = styled.div`
  width: 100%;
  margin-left: 2rem;
`;

RandomBirdContainer.displayName = 'RandomBirdContainerStyled';
QuestionContainer.displayName = 'QuestionContainerStyled';

const RandomBird = () => {
  return (
    <RandomBirdContainer>
      <ImageComponent />
      <QuestionContainer>
        <TitleComponent />
        <AudioComponent />
      </QuestionContainer>
    </RandomBirdContainer>
  );
};

export default RandomBird;
