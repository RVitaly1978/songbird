import { createStore } from 'redux';
import { saveState, loadState } from './localStorage';

import reducer from './reducer';
import initialState from './initialState';

const store = createStore(reducer, initialState);

store.subscribe(() => {
  saveState(store.getState());
});

loadState().then((persistedState) => {
  if (persistedState) {
    store.dispatch({
      type: 'UPDATE_STATE_FROM_STORAGE',
      state: persistedState,
    });
  }
});

export default store;
