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

const VolumeOffIconStyled = styled(VolumeOffIcon)`
  margin-right: 1.5rem;
  flex-shrink: 0;
`;

const VolumeOnIconStyled = styled(VolumeOnIcon)`
  margin-right: 1.5rem;
  flex-shrink: 0;
`;

const handleStyle = {
  border: 'none',
  backgroundColor: '#008966',
  '&:active': {
    boxShadow: '0 0 3px #d3d3d3',
  },
};

const trackStyle = {
  backgroundColor: '#008966',
  borderRadius: '2px',
};

const railStyle = {
  backgroundColor: '#d3d3d3',
  borderRadius: '2px',
};

VolumeControlsContainer.displayName = 'VolumeControlsContainerStyled';
VolumeOffIconStyled.displayName = 'VolumeOffIconStyledStyled';
VolumeOnIconStyled.displayName = 'VolumeOnIconStyledStyled';

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

    if (settings.volume === 0 && settings.mute === false) {
      settings.volume = 1;
    }

    updateSoundVolumeSettings(settings);
  };

  const onSliderChange = (value) => {
    const settings = {
      mute: (value === 0) ? true : false,
      volume: value,
    };

    updateSoundVolumeSettings(settings);
  };

  return (
    <VolumeControlsContainer>
      {mute
        ? <VolumeOffIconStyled
            id={VOLUME_OFF}
            iconTitle='Volume-off button'
            onClick={handleVolumeButtonClick}
          />
        : <VolumeOnIconStyled
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
        handleStyle={handleStyle}
        trackStyle={trackStyle}
        railStyle={railStyle}
      />
    </VolumeControlsContainer>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(VolumeControls);
