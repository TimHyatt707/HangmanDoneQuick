// Set game status
const START_GAME = 'gameplay/START_GAME';
const SET_GAME_IN_PROG = 'gameplay/SET_GAME_IN_PROG';
const SET_GAME_FINISHED = 'gameplay/SET_GAME_FINISHED';

// Set player guess
const SEND_CORRECT_GUESS = 'gameplay/SEND_CORRECT_GUESS';
const SEND_INCORRECT_GUESS = 'gameplay/SEND_INCORRECT_GUESS';

// Update the score
const UPDATE_SCORE = 'gameplay/UPDATE_SCORE';

// Set new word
const SET_NEW_WORD = 'gameplay/SET_NEW_WORD';

// Reset the game
const RESET = 'gameplay/RESET';

// Get words
const GET_WORDS_START = 'gameplay/GET_WORDS_START';
const GET_WORDS_SUCCESS = 'gameplay/GET_WORDS_SUCCESS';
const GET_WORDS_FAILED = 'gameplay/GET_WORDS_FAILED';

export {
  START_GAME,
  SET_GAME_IN_PROG,
  SET_GAME_FINISHED,
  SEND_CORRECT_GUESS,
  SEND_INCORRECT_GUESS,
  SET_NEW_WORD,
  UPDATE_SCORE,
  RESET,
  GET_WORDS_FAILED,
  GET_WORDS_START,
  GET_WORDS_SUCCESS
};
