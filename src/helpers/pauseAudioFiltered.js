const pauseAudioFiltered = (id, ...audioElements) => {
  audioElements.forEach((audio) => {
    if ((audio) && (audio.id !== id)) {
      audio.pause();
    }
  });

  return undefined;
};

export default pauseAudioFiltered;
