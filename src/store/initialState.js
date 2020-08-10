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
  notifications: [
    {
      id: 'qqq',
      type: 'error',
      notification: 'can not load 111',
    },
    {
      id: 'www',
      type: 'error',
      notification: 'can not load 222',
    },
    {
      id: 'zzz',
      type: 'success',
      notification: 'all good',
    },
  ],
};

export default initialState;
