import * as types from '../../actionTypes/gameplay';

const startNewGame = () => dispatch => {};

const createGuess = letter => dispatch => {
  // TODO: Handle Guess logic
  // Check if guess is already been tried

  // Send Correct Guess

  // Send incorrect guess
  dispatch({
    type: types.SEND_GUESS,
    payload: letter
  });
};

const updateScore = () => dispatch => {};

const setNewWord = () => dispatch => {};

const setGameplayStatus = status => dispatch => {
  if (status === 'finished') {
    dispatch({
      type: types.SET_GAME_FINISHED,
      payload: status
    });
  }
};

const reset = () => dispatch => {};

export { startNewGame, createGuess, updateScore, setNewWord, reset, setGameplayStatus };
