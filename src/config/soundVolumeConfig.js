const initSoundVolumeConfig = {
  mute: false,
  volume: 0.5,
};

const getLocalSoundVolumeConfig = () => {
  const localSoundVolumeConfig = localStorage.getItem('songBirdSoundVolumeConfig')
    ? localStorage.getItem('songBirdSoundVolumeConfig')
    : null;

  let config = initSoundVolumeConfig;

  if (localSoundVolumeConfig) {
    config = JSON.parse(localSoundVolumeConfig);
  }

  return config;
};

const soundVolumeConfig = getLocalSoundVolumeConfig();
export default soundVolumeConfig;
