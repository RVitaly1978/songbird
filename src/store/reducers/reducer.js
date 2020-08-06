import initialState from '../initialState';

function reducer(state, action) {
  const nextLevelIndex = state.levels.length;
  const maxLevelIndex = Object.keys(state.data).length - 1;

  const newState = {};

  switch (action.type) {
    case 'SELECT_ANSWER':
      newState.activeAnswer = action.id;
      if (!state.hasCorrect) {
        newState.answers = [...state.answers, action.id];

        if (action.id === state.correctAnswer) {
          newState.hasCorrect = true;
          newState.levels = [...state.levels, state.activeLevel];

          const group = state.data[state.activeLevel];
          const score = group.length - state.answers.length - 1;
          const maxScore = (state.levels.length + 1) * 5;
          newState.score = state.score + score;
          newState.maxScore = maxScore;
        }
      }
      return {...state, ...newState};

    case 'NEXT_LEVEL':
      newState.hasCorrect = false;
      newState.answers = [];
      newState.activeAnswer = null;

      if (nextLevelIndex <= maxLevelIndex) {
        const activeLevel = Object.keys(state.data)[nextLevelIndex];
        state.activeLevel = activeLevel;
      } else {
        state.activeLevel = null;
      }
      return {...state, ...newState};

    case 'RESTART_GAME':
      return initialState;

    case 'NEW_GAME':
      return initialState;

    default:
      return state;
  }
}

export default reducer;
