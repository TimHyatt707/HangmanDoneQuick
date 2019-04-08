import React from 'react';
import uuidv1 from 'uuid/v1';

const GuessedLettersRow = props => {
  const { guessedLetters } = props;
  return (
    <div className="guesses-column">
      <div className="medium-padding">Guessed Letters</div>
      <div className="row">
        {guessedLetters.map(guess => (
          <div className="small-padding" key={uuidv1()}>
            {guess}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuessedLettersRow;
