// Four enums for gameplay status: started, finished, ready
import * as types from '../actionTypes/gameplay';
import { Status } from '../../consts';

// TODO: Move these helper functions to a util folder
const createGuessArray = (letter, currentWord, oldGuessesArray) => {
  const newGuessesArray = oldGuessesArray;
  currentWord.map((char, index) => {
    if (char === letter) {
      newGuessesArray[index] = char;
    }
    return char;
  });
  return newGuessesArray;
};

const createIncorrectGuessArray = (letter, oldGuessesArray) => {
  const nullIndex = oldGuessesArray.indexOf(null);
  const newGuessesArray = oldGuessesArray;
  newGuessesArray[nullIndex] = letter;
  return newGuessesArray;
};

const setGuessArray = word => {
  const emptyArray = word.split('');
  return emptyArray.map(() => null);
};

const initialState = {
  status: 'started',
  score: 0,
  correctGuesses: [],
  incorrectGuesses: [null, null, null, null, null, null],
  guessedLetters: [],
  currentWord: [],
  wordStore: [],
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_GAME_FINISHED:
      return {
        ...state,
        status: action.payload
      };
    case types.SEND_CORRECT_GUESS:
      return {
        ...state,
        correctGuesses: createGuessArray(
          action.payload,
          [...state.currentWord],
          [...state.correctGuesses]
        ),
        guessedLetters: [...state.guessedLetters, action.payload]
      };
    case types.SEND_INCORRECT_GUESS:
      return {
        ...state,
        incorrectGuesses: createIncorrectGuessArray(action.payload, state.incorrectGuesses),
        guessedLetters: [...state.guessedLetters, action.payload]
      };
    case types.UPDATE_SCORE:
      return {
        ...state,
        score: state.score + action.payload
      };
    case types.GET_WORDS_START:
      return {
        ...state,
        isLoading: true
      };
    case types.GET_WORDS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        wordStore: action.payload
      };
    case types.GET_WORDS_FAILED:
      return {
        ...state,
        isLoading: false
      };
    case types.SET_NEW_WORD:
      return {
        ...state,
        correctGuesses: setGuessArray(action.payload),
        currentWord: action.payload.split('')
      };
    case types.RESET:
      return {
        ...state,
        status: Status.STARTED,
        incorrectGuesses: [null, null, null, null, null, null],
        guessedLetters: [],
        score: 0
      };
    default:
      return state;
  }
};
