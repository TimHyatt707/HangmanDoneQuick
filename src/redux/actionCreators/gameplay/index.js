import * as types from '../../actionTypes/gameplay';

const startNewGame = () => dispatch => {};

const createGuess = () => dispatch => {};

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
