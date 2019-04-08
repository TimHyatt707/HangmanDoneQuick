import React from 'react';
import './index.css';
import PrimaryButton from '../../../../components/PrimaryButton';

class GameOver extends React.Component {

  onClickReset = () => {
    const { wordStore, reset, getRandomWord} = this.props;
    getRandomWord(wordStore)
    reset();
  }

  render = () => {
    const {
        currentWord,
        correctGuesses,
        score,
    } = this.props;
    let resultStatement = '';
    if (currentWord.join('') === correctGuesses.join('')) {
        resultStatement = 'You Won!'
    } else {
        resultStatement = 'You Lost!'
    }
    const scoreStatement = `Your score was ${score}`
    const wordStatement = `Your word was ${currentWord.join('')}.`
    return (
      <div className="game-over-screen">
        <div className="game-over-text">Game Over!</div>
        <div className="game-over-text">{resultStatement}</div>
        <div className="game-over-text">{wordStatement}</div>
        <div>{scoreStatement}</div>
        <PrimaryButton text="Play Again" onClick={this.onClickReset} />
        <PrimaryButton text="Back to Menu" override onClick={this.onClickReset} route="/" />
      </div>
    );
  }
};

export default GameOver
