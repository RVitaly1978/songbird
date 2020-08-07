import { createStore } from 'redux';

import { saveState, loadState } from './localStorage';
import reducer from './reducer';
import { updateStateFromStorage } from './action-creators';
import initialState from './initialState';

const store = createStore(reducer, initialState);

store.subscribe(() => {
  saveState(store.getState());
});

loadState().then((state) => {
  if (state) {
    store.dispatch(updateStateFromStorage(state));
  }
});

export default store;
