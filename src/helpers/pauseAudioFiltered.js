const pauseAudioFiltered = (id, ...audioElements) => {
  audioElements.forEach((audio) => {
    if ((audio) && (audio.audio) && (audio.audio.current) && (audio.audio.current.id !== id)) {
      audio.audio.current.pause();
    }
  });

  return undefined;
};

export default pauseAudioFiltered;
