// Three enums for gameplay status: started, inProgress, finished, ready
import * as types from '../actionTypes/gameplay';

const initialState = {
  status: 'started',
  score: 100,
  correctGuesses: [],
  incorrectGuesses: [null, null, null, null, null],
  guessedLetters: [],
  currentWord: ['a', 'p', 'p', 'l', 'e'],
  wordDatabase: [],
  isLoadingData: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_GAME_FINISHED:
      return {
        status: action.payload,
        ...state
      };
    case types.SEND_CORRECT_GUESS:
      return {
        ...state
      };
    case types.SEND_INCORRECT_GUESS:
      return {
        ...state
      };
    default:
      return state;
  }
};
