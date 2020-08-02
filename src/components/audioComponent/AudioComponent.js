import React from 'react';
import styled from 'styled-components';

const AudioContainer = styled.p`
  padding-top: 2rem;

  font-size: 2rem;
  line-height: 1;
  font-weight: 700;

  user-select: none;
`;

AudioContainer.displayName = 'AudioContainerStyled';

const AudioComponent = () => {
  return (
    <AudioContainer>
      ******
    </AudioContainer>
  );
};

export default AudioComponent;
