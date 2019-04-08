import React from 'react';
import { connect } from 'react-redux';
import {
  startNewGame,
  createCorrectGuess,
  createIncorrectGuess,
  setNewWord,
  setGameplayStatus,
  getWords,
  reset
} from '../../redux/actionCreators/gameplay/index';
import { Status } from '../../consts';
import Timer from '../../components/Timer';
import GuessedLettersRow from '../../components/GuessedLettersRow';
import IncorrectGuessesRow from '../../components/IncorrectGuessesRow';
import GuessTextInput from '../../components/GuessTextInput';
import Puzzle from '../../components/Puzzle';
import './index.css';
import GameOver from './components/GameOver';

class GameScreen extends React.Component {
  componentWillMount = () => {
    // TODO: Pass in game settings as an argument
    const { getWordsAction } = this.props;
    getWordsAction();
  }

  componentWillReceiveProps = nextProps => {
    const { currentWord, setNewWordAction } = this.props;
    if (!currentWord.length && nextProps.wordStore.length)  {
      this.getRandomWord(nextProps.wordStore);
    }
  }

  componentDidUpdate = () => {
    const { setGameplayStatusAction, correctGuesses, incorrectGuesses, currentWord } = this.props;
    // Check for win condition
    if (correctGuesses.join("") == currentWord.join("") && currentWord.length) {
      setGameplayStatusAction(Status.FINISHED);
    }

    // Check for lose condition
    if (incorrectGuesses[incorrectGuesses.length - 1] !== null) {
      setGameplayStatusAction(Status.FINISHED);
    }
  }

  handleGuess = guess => {
    const { guessedLetters, currentWord, createCorrectGuessAction, createIncorrectGuessAction } = this.props;
    if (guessedLetters.indexOf(guess) !== -1) return;
    if (currentWord.indexOf(guess) !== -1) {
      createCorrectGuessAction(guess);
    } else {
      createIncorrectGuessAction(guess);
    }
  }

  getRandomWord = arrayOfWords => {
    const { setNewWordAction } = this.props;
    const randomNumber = Math.floor(Math.random() * arrayOfWords.length);
    const randomWord = arrayOfWords[randomNumber]
    setNewWordAction(randomWord);
  }

  render = () => {
    const {
      currentScore,
      incorrectGuesses,
      setGameplayStatusAction,
      status,
      currentWord,
      correctGuesses,
      isLoadingData,
      wordStore,
      resetAction,
      setNewWordAction,
      guessedLetters
    } = this.props;
    const scoreText = `Score: ${currentScore}`;
    return (
      // TODO: Create more visually pleasing loading screen
      <div className="game-screen-container">
        {isLoadingData && <div className="loading"> Loading . . . </div> }
        {(status === Status.STARTED) && !isLoadingData && (
          <div>
            <div className="gamescreen-row">
              <Timer endGame={setGameplayStatusAction} />
              <div className="gamescreen-row-item">{scoreText}</div>
            </div>
            <Puzzle letters={currentWord} correctGuesses={correctGuesses} />
            <IncorrectGuessesRow incorrectGuesses={incorrectGuesses} />
            <GuessedLettersRow guessedLetters={guessedLetters} />
            <GuessTextInput sendGuess={this.handleGuess} />
          </div>
        )}
        {status === Status.FINISHED && <GameOver 
          incorrectGuesses={incorrectGuesses} 
          currentWord={currentWord} 
          correctGuesses={correctGuesses} 
          wordStore={wordStore}
          getRandomWord={this.getRandomWord}
          setNewWord={setNewWordAction}
          reset={resetAction}
          score={currentScore}
        />}
      </div>
    );
  }
};

const mapStateToProps = state => ({
  status: state.gameplay.status,
  incorrectGuesses: state.gameplay.incorrectGuesses,
  currentScore: state.gameplay.score,
  currentWord: state.gameplay.currentWord,
  isLoadingData: state.gameplay.isLoading,
  correctGuesses: state.gameplay.correctGuesses,
  guessedLetters: state.gameplay.guessedLetters,
  wordStore: state.gameplay.wordStore
});

const mapDispatchToProps = dispatch => ({
  startAction: status => dispatch(startNewGame(status)),
  createCorrectGuessAction: guess => dispatch(createCorrectGuess(guess)),
  createIncorrectGuessAction: guess => dispatch(createIncorrectGuess(guess)),
  setNewWordAction: word => dispatch(setNewWord(word)),
  setGameplayStatusAction: status => dispatch(setGameplayStatus(status)),
  getWordsAction: () => dispatch(getWords()),
  resetAction: () => dispatch(reset())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameScreen);
