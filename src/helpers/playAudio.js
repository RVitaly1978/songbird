const playAudio = (...audioElements) => {
  audioElements.forEach((audio) => {
    if (audio) {
      audio.play();
    }
  });

  return undefined;
};

export default playAudio;
