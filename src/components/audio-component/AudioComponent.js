import React from 'react';
import styled from 'styled-components';
import AudioPlayer from 'react-h5-audio-player';
import './styles.css';

import { device } from '../../styles/media';

const AudioContainer = styled.div`
  margin-top: ${props => props.theme.all.margin};

  font-size: inherit;
  line-height: 1;
  font-weight: 700;

  user-select: none;

  @media ${device.mobileM} {
    margin-top: ${props => props.theme.all.marginMobile};
  }
`;

AudioContainer.displayName = 'AudioContainerStyled';

const AudioComponent = ({ src, audioRef, id, onAudioError, layout }) => {
  return (
    <AudioContainer>
      <AudioPlayer
        src={src}
        ref={audioRef}
        layout={layout}
        autoPlayAfterSrcChange={false}
        showJumpControls={false}
        customAdditionalControls={[]}
        onError={(evt) => {
          evt.target.id = id;
          return onAudioError(evt);
        }}
      />
    </AudioContainer>
  );
};

export default AudioComponent;
