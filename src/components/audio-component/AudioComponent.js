import React from 'react';
import styled from 'styled-components';

const AudioContainer = styled.p`
  padding-top: ${props => props.theme.all.padding};

  font-size: inherit;
  line-height: 1;
  font-weight: 700;

  user-select: none;
`;

const Audio = styled.audio`
  width: 100%;
`;

AudioContainer.displayName = 'AudioContainerStyled';

const AudioComponent = ({ audio, isControls }) => {
  return (
    <AudioContainer>
      <Audio src={audio} controls={isControls} />
    </AudioContainer>
  );
};

export default AudioComponent;
