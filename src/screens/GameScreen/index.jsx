import React from 'react';
import { connect } from 'react-redux';
import {
  startNewGame,
  createGuess,
  updateScore,
  setNewWord,
  setGameplayStatus
} from '../../redux/actionCreators/gameplay/index';
import Timer from '../../components/Timer';
import IncorrectGuessesRow from '../../components/IncorrectGuessesRow';
import GuessTextInput from '../../components/GuessTextInput';
import Puzzle from '../../components/Puzzle';
import './index.css';

const GameScreen = props => {
  const {
    currentScore,
    incorrectGuesses,
    end,
    status,
    currentWord,
    correctGuesses,
    createGuess
  } = props;
  const scoreText = `Score: ${currentScore}`;
  return (
    // primary game screen
    // TODO: Create finished game screen
    <div>
      {(status === 'started' || status === 'inProgress') && (
        <div className="game-screen-container">
          <div className="gamescreen-row">
            <Timer endGame={end} />
            <div className="gamescreen-row-item">{scoreText}</div>
          </div>
          <Puzzle letters={currentWord} correctGuesses={correctGuesses} />
          <IncorrectGuessesRow incorrectGuesses={incorrectGuesses} />
          <GuessTextInput sendGuess={createGuess} />
        </div>
      )}
      {status === 'finished' && <div>GAME OVER !</div>}
    </div>
  );
};

const mapStateToProps = state => ({
  status: state.gameplay.status,
  incorrectGuesses: state.gameplay.incorrectGuesses,
  currentScore: state.gameplay.score,
  currentWord: state.gameplay.currentWord,
  isLoadingData: state.gameplay.isLoadingData,
  correctGuesses: state.gameplay.correctGuesses,
  guessedLetters: state.gameplay.guessedLetters
});

const mapDispatchToProps = dispatch => ({
  start: status => dispatch(startNewGame(status)),
  guess: letter => dispatch(createGuess(letter)),
  score: () => dispatch(updateScore()),
  newWord: () => dispatch(setNewWord()),
  end: status => dispatch(setGameplayStatus(status))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameScreen);
