import React from 'react';
import uuidv1 from 'uuid/v1';
import './index.css';
import IncorrectGuess from './components/IncorrectGuess';

const IncorrectGuessesRow = props => {
  const { incorrectGuesses } = props;
  return (
    <div className="guesses-column">
      <div className="incorrect-guesses-text">Wrong Guesses</div>
      <div className="row">
        {incorrectGuesses.map(incorrectGuess => (
          <IncorrectGuess key={uuidv1()} letter={incorrectGuess} />
        ))}
      </div>
    </div>
  );
};

export default IncorrectGuessesRow;
