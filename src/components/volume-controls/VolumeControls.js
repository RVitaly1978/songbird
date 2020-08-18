import React, { useState } from 'react';
import styled from 'styled-components';

import soundVolumeConfig from '../../config/soundVolumeConfig';

import VolumeOnIcon from './VolumeOnIcon';
import VolumeOffIcon from './VolumeOffIcon';

const VolumeControlsContainer = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 10rem;
  height: 3rem;

  line-height: 1;
`;

VolumeControlsContainer.displayName = 'VolumeControlsContainerStyled';

const VOLUME_ON = 'volumeOn';
const VOLUME_OFF = 'volumeOff';

const VolumeControls = () => {
  const [volumeConfig, setVolumeConfig] = useState(soundVolumeConfig);
  const { mute, volume } = volumeConfig;

  const handleVolumeButtonClick = (evt) => {
    const { id } = evt.target;

    const config = {
      mute: (id === 'volumeOn') ? true : false,
      volume,
    };

    localStorage.setItem('songBirdSoundVolumeConfig', JSON.stringify(config));
    setVolumeConfig(() => config);
  };

  return (
    <VolumeControlsContainer>
      {mute
        ? <VolumeOffIcon
            id={VOLUME_OFF}
            iconTitle='Volume-off button'
            onClick={handleVolumeButtonClick}
          />
        : <VolumeOnIcon
            id={VOLUME_ON}
            iconTitle='Volume-on button'
            onClick={handleVolumeButtonClick}
          />
      }
    </VolumeControlsContainer>
  );
};

export default VolumeControls;
