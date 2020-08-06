import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { device } from '../../styles/media';

import ImageComponent from '../image-component';
import TitleComponent from '../title-component';
import AudioComponent from '../audio-component';

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

const mapStateToProps = ({ data, activeLevel, hasCorrect, correctAnswer }) => {
  return {
    data,
    activeLevel,
    hasCorrect,
    correctAnswer,
  };
};

const RandomBird = ({ data, activeLevel, hasCorrect, correctAnswer }) => {
  const correctAnswerData = data
    .filter((dataItem) => dataItem.id === activeLevel)[0].data
    .filter((activeItem) => activeItem.id === correctAnswer)[0];
  const { name, audio, image } = correctAnswerData;

  return (
    <RandomBirdContainer>
      <ImageComponent hasCorrect={hasCorrect} image={image} />
      <QuestionContainer>
        <TitleComponent hasCorrect={hasCorrect} content={name} />
        <AudioComponent audio={audio} isControls={true}/>
      </QuestionContainer>
    </RandomBirdContainer>
  );
};

export default connect(mapStateToProps)(RandomBird);
