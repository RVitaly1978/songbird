import React from 'react';
import styled from 'styled-components';

import { device } from '../../styles/media';

import ImageComponent from '../imageComponent/index';
import TitleComponent from '../titleComponent/index';
import AudioComponent from '../audioComponent/index';

const RandomBirdContainer = styled.div`
  display: flex;

  width: 100%;
  margin-top: ${props => props.theme.all.margin};
  padding: ${props => props.theme.all.paddingMobile};

  background-color: ${props => props.theme.main.bgColor};
  border: 1px solid ${props => props.theme.main.borderColor};
  border-radius: ${props => props.theme.all.borderRadius};

  @media ${device.mobileL} {
    flex-direction: column;
    align-items: center;
  }

  @media ${device.mobileM} {
    margin-top: ${props => props.theme.all.marginMobile};
  }
`;

const QuestionContainer = styled.div`
  width: 100%;
  margin-left: ${props => props.theme.all.margin};

  @media ${device.mobileL} {
    margin: ${props => props.theme.all.margin} 0 0 0;
  }
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
