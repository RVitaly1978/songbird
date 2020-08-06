import React from 'react';
import styled from 'styled-components';

const AudioContainer = styled.p`
  padding-top: ${props => props.theme.all.padding};

  font-size: inherit;
  line-height: 1;
  font-weight: 700;

  user-select: none;
`;

AudioContainer.displayName = 'AudioContainerStyled';

const AudioComponent = ({ audio, isControls }) => {
  return (
    <AudioContainer>
      <audio src={audio} controls={isControls} />
    </AudioContainer>
  );
};

export default AudioComponent;
