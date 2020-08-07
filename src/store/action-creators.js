export const newGameBirdsBasic = () => ({
  type: 'NEW_GAME_BIRDS_BASIC',
});

export const newGameAnimalsBasic = () => ({
  type: 'NEW_GAME_ANIMALS_BASIC',
});

export const nextLevel = () => ({
  type: 'NEXT_LEVEL',
});

export const selectAnswer = (id) => ({
  type: 'SELECT_ANSWER',
  id,
});

export const updateStateFromStorage = (state) => ({
  type: 'UPDATE_STATE_FROM_STORAGE',
  state,
});

export const restartGame = () => ({
  type: 'RESTART_GAME',
});

const newGame = () => ({
  type: 'NEW_GAME',
});

export default newGame;
