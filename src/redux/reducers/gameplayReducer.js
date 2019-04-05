// Three enums for gameplay status: started, inProgress, finished, ready
import * as types from '../actionTypes/gameplay';

const initialState = {
  status: 'started',
  score: 100,
  currentGuesses: [],
  incorrectGuesses: [null, null, null, null, null, null],
  currentWord: 'Foobar',
  wordDatabase: [],
  isLoadingData: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_GAME_FINISHED:
      return {
        status: action.payload
      };
    default:
      return state;
  }
};
