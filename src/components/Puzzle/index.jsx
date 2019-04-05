import React from 'react';
import Guess from './components/Guess';
import './index.css';

const Puzzle = props => {
  const { letters, correctGuesses } = props;
  return (
    <div className="guesses-row">
      {letters.map(letter => {
        if (correctGuesses.indexOf(letter) === -1) {
          return <Guess letter="?" />;
        }
        return <Guess letter={letter} />;
      })}
    </div>
  );
};

export default Puzzle;
