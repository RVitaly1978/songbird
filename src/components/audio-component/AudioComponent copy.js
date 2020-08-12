import React from 'react';
import styled from 'styled-components';

import { device } from '../../styles/media';

const AudioContainer = styled.p`
  margin-top: ${props => props.theme.all.margin};

  font-size: inherit;
  line-height: 1;
  font-weight: 700;

  user-select: none;

  @media ${device.mobileM} {
    margin-top: ${props => props.theme.all.marginMobile};
  }
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
