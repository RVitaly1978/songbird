const initSoundVolumeSettings = {
  mute: false,
  volume: 0.5,
};

const initialState = {
  data: [],
  levels: [],
  activeLevel: null,
  answers: [],
  activeAnswer: null,
  correctAnswer: null,
  hasCorrect: false,
  score: 0,
  maxScore: 0,
  notifications: [],
  soundVolumeSettings: initSoundVolumeSettings,
};

export default initialState;
