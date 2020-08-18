import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import { updateSoundVolumeSettings } from '../../store/action-creators';

import VolumeOnIcon from './VolumeOnIcon';
import VolumeOffIcon from './VolumeOffIcon';

const VolumeControlsContainer = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 15rem;
  height: 3rem;

  line-height: 1;
`;

VolumeControlsContainer.displayName = 'VolumeControlsContainerStyled';

const VOLUME_ON = 'volumeOn';
const VOLUME_OFF = 'volumeOff';

const mapStateToProps = ({ soundVolumeSettings }) => {
  return { soundVolumeSettings };
};

const mapDispatchToProps = (dispatch) => ({
  updateSoundVolumeSettings: (settings) => dispatch(updateSoundVolumeSettings(settings)),
});

const VolumeControls = ({ soundVolumeSettings, updateSoundVolumeSettings }) => {
  const { mute, volume } = soundVolumeSettings;

  const handleVolumeButtonClick = (evt) => {
    const { id } = evt.target;

    const settings = {
      mute: (id === VOLUME_ON) ? true : false,
      volume,
    };

    updateSoundVolumeSettings(settings);
  };

  const onSliderChange = (value) => {
    const settings = {
      mute,
      volume: value,
    };

    updateSoundVolumeSettings(settings);
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
      <Slider
        min={0}
        max={1}
        value={mute ? 0 : volume}
        step={0.05}
        onChange={onSliderChange}
      />
    </VolumeControlsContainer>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(VolumeControls);
