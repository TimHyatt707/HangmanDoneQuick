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
import './index.css';

const GameScreen = props => {
  const { currentScore, incorrectGuesses, end, status } = props;
  const scoreText = `Score: ${currentScore}`;
  return (
    // primary game screen
    <div>
      {(status === 'started' || status === 'inProgress') && (
        <div className="game-screen-container">
          <div className="gamescreen-row">
            <Timer endGame={end} />
            <div className="gamescreen-row-item">{scoreText}</div>
          </div>
          <IncorrectGuessesRow incorrectGuesses={incorrectGuesses} />
          <GuessTextInput />
        </div>
      )}
      {status === 'finished' && <div>GAME OVER !</div>}
    </div>
    // TODO: Create finished game screen
  );
};

const mapStateToProps = state => ({
  status: state.gameplay.status,
  incorrectGuesses: state.gameplay.incorrectGuesses,
  currentScore: state.gameplay.score,
  currentWord: state.gameplay.currentWord,
  isLoadingData: state.gameplay.isLoadingData
});

const mapDispatchToProps = dispatch => ({
  start: status => dispatch(startNewGame(status)),
  guess: () => dispatch(createGuess()),
  score: () => dispatch(updateScore()),
  newWord: () => dispatch(setNewWord()),
  end: status => dispatch(setGameplayStatus(status))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameScreen);
