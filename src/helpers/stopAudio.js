const stopAudio = (...audioElements) => {
  audioElements.forEach((audio) => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  });

  return undefined;
};

export default stopAudio;
