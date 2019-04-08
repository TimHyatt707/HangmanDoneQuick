import fetch from 'isomorphic-fetch';
import * as types from '../../actionTypes/gameplay';
import { API_URL, CORS_BYPASS } from '../../../consts';

const startNewGame = () => dispatch => {};

const getWordsStart = () => ({
  type: types.GET_WORDS_START
});

const getWordsSuccess = payload => ({
  type: types.GET_WORDS_SUCCESS,
  payload
});

const getWordsFailed = () => ({
  type: types.GET_WORDS_FAILED
});

const getWords = () => async dispatch => {
  try {
    const options = {
      method: 'get',
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    };
    dispatch(getWordsStart());
    const response = await fetch(`${CORS_BYPASS}${API_URL}`, options);
    if (response.status === 200) {
      const payload = await response.text();
      const dataArray = payload.split('\n');
      dispatch(getWordsSuccess(dataArray));
    } else {
      throw new Error('Request failed');
    }
  } catch (error) {
    dispatch(getWordsFailed());
    console.log(error.message);
  }
};

const createCorrectGuess = letter => dispatch => {
  dispatch({
    type: types.SEND_CORRECT_GUESS,
    payload: letter
  });
  dispatch({
    type: types.UPDATE_SCORE,
    payload: 10
  });
};

const createIncorrectGuess = letter => dispatch => {
  dispatch({
    type: types.SEND_INCORRECT_GUESS,
    payload: letter
  });
};

const setNewWord = word => dispatch =>
  dispatch({
    type: types.SET_NEW_WORD,
    payload: word
  });

const setGameplayStatus = status => dispatch => {
  if (status === 'finished') {
    dispatch({
      type: types.SET_GAME_FINISHED,
      payload: status
    });
  }
};

const reset = () => dispatch => {
  dispatch({
    type: types.RESET
  });
};

export {
  startNewGame,
  createCorrectGuess,
  createIncorrectGuess,
  setNewWord,
  reset,
  setGameplayStatus,
  getWords
};
