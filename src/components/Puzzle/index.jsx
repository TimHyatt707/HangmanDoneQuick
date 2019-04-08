import React from 'react';
import uuidv1 from 'uuid/v1';
import Guess from './components/Guess';
import './index.css';

const Puzzle = props => {
  const { letters, correctGuesses } = props;
  return (
    <div className="puzzle-guesses-column">
      <div className="puzzle-text-label">Current Word</div>
      <div className="row">
        {letters.map(letter => {
          if (correctGuesses.indexOf(letter) === -1) {
            return <Guess key={uuidv1()} letter="?" />;
          }
          return <Guess key={uuidv1()} letter={letter} />;
        })}
      </div>
    </div>
  );
};

export default Puzzle;
