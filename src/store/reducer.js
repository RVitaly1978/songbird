import initialState from './initialState';
import { getRandomInRange, getActiveLevelList } from '../helpers';
import { birdsBasic } from '../game-data';

function reducer(state = initialState, action = {}) {
  const nextLevelIndex = state.levels.length;
  const maxLevelIndex = state.data.length - 1;

  const newState = {};

  switch (action.type) {
    case 'SELECT_ANSWER':
      newState.activeAnswer = action.id;
      if (!state.hasCorrect) {
        newState.answers = [...state.answers, action.id];

        if (action.id === state.correctAnswer) {
          newState.hasCorrect = true;
          newState.levels = [...state.levels, state.activeLevel];

          const activeLevelList = getActiveLevelList(state.data, state.activeLevel);
          const score = activeLevelList.data.length - state.answers.length - 1;
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
        newState.activeLevel = state.data[nextLevelIndex].id;
        newState.correctAnswer = getRandomInRange(
          getActiveLevelList(state.data, newState.activeLevel).data.length);
      } else {
        newState.activeLevel = null;
      }
      return {...state, ...newState};

    case 'RESTART_GAME':
      newState.data = [...state.data];
      newState.activeLevel = newState.data[0].id;
      newState.correctAnswer = getRandomInRange(
        getActiveLevelList(newState.data, newState.activeLevel).data.length);
      return {...initialState, ...newState};

    case 'NEW_GAME_BIRDS_BASIC':
      newState.data = [...birdsBasic];
      newState.activeLevel = newState.data[0].id;
      newState.correctAnswer = getRandomInRange(
        getActiveLevelList(newState.data, newState.activeLevel).data.length);
      return {...initialState, ...newState};

    case 'NEW_GAME':
      return {...initialState};

    case 'UPDATE_STATE_FROM_STORAGE':
      return {...action.state};

    default:
      return state;
  }
}

export default reducer;
