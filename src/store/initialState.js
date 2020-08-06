import birdsDataBasic from '../gameData/birdsDataBasic';

const initialState = {
  data: birdsDataBasic,
  levels: [],
  activeLevel: 'разминка',
  answers: [],
  activeAnswer: null,
  correctAnswer: 4,
  hasCorrect: false,
  score: 0,
  maxScore: 0,
};

export default initialState;
