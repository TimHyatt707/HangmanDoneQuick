import React from 'react';
import './index.css';
import IncorrectGuess from './components/IncorrectGuess';

const IncorrectGuessesRow = props => {
  const { incorrectGuesses } = props;
  return (
    <div className="guesses-row">
      {incorrectGuesses.map(incorrectGuess => (
        <IncorrectGuess letter={incorrectGuess} />
      ))}
    </div>
  );
};

export default IncorrectGuessesRow;
