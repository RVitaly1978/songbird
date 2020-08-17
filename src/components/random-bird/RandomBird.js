import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { device } from '../../styles/media';
import { fadeInAnimation } from '../../styles/animation';

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

  animation: ${fadeInAnimation} 0.3s linear;

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

  @media ${device.mobileM} {
    margin: ${props => props.theme.all.marginMobile} 0 0 0;
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

const getComponentData = (dataObj, activeId, correctId) => {
  const data = dataObj
    .filter((dataItem) => dataItem.id === activeId)[0].data
    .filter((activeItem) => activeItem.id === correctId)[0];

  return data;
};

const RandomBird = ({
  data, activeLevel, hasCorrect, correctAnswer, audioRef, onAudioError, onAudioPlay,
}) => {
  const { name, audio, image } = getComponentData(data, activeLevel, correctAnswer);

  return (
    <RandomBirdContainer>
      <ImageComponent hasCorrect={hasCorrect} image={image} />
      <QuestionContainer>
        <TitleComponent hasCorrect={hasCorrect} content={name} />
        <AudioComponent
          id='randomBirdSound'
          src={audio}
          layout='horizontal-reverse'
          audioRef={audioRef}
          onAudioError={onAudioError}
          onAudioPlay={onAudioPlay}
        />
      </QuestionContainer>
    </RandomBirdContainer>
  );
};

export default connect(mapStateToProps)(RandomBird);
