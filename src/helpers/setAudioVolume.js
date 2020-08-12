const setAudioVolume = (volume, ...audioElements) => {
  audioElements.forEach((audio) => {
    if (audio) {
      audio.volume = Number(volume);
    }
  });

  return undefined;
};

export default setAudioVolume;
