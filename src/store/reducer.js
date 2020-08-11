import initialState from './initialState';
import { getRandomInRange, getActiveLevelList } from '../helpers';
import { birdsBasic, animalsBasic } from '../game-data';

function reducer(state = initialState, action = {}) {
  const newState = {};

  switch (action.type) {
    case 'SELECT_ANSWER':
      return {...state, ...action.state};

    case 'NEXT_LEVEL':
      newState.hasCorrect = false;
      newState.answers = [];
      newState.activeAnswer = null;
      newState.notifications = [];
      return {...state, ...newState, ...action.state};

    case 'DELETE_NOTIFICATION':
      newState.notifications = state.notifications
        .filter((notification) => notification.id !== action.id);
      return {...state, ...newState};

    case 'ADD_NOTIFICATION':
      newState.notifications = [...state.notifications, action.notification];
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

    case 'NEW_GAME_ANIMALS_BASIC':
      newState.data = [...animalsBasic];
      newState.activeLevel = newState.data[0].id;
      newState.correctAnswer = getRandomInRange(
        getActiveLevelList(newState.data, newState.activeLevel).data.length);
      return {...initialState, ...newState};

    case 'NEW_GAME':
      return {...initialState};

    case 'UPDATE_STATE_FROM_STORAGE':
      newState.notifications = [];
      return {...action.state, ...newState};

    default:
      return state;
  }
}

export default reducer;
