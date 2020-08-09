import initialState from './initialState';
import { getRandomInRange, getActiveLevelList } from '../helpers';
import { birdsBasic, animalsBasic } from '../game-data';

function reducer(state = initialState, action = {}) {
  const newState = {};

  switch (action.type) {
    case 'SELECT_ANSWER':
      return {...state, ...action.state};

    case 'NEXT_LEVEL':
      return {...state, ...action.state};

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

    case 'NEW_GAME_ANIMALS_BASIC':
      newState.data = [...animalsBasic];
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
