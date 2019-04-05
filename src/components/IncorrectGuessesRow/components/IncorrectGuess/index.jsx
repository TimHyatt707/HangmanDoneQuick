import React from 'react';
import './index.css';

const IncorrectGuess = props => {
  const { letter } = props;
  return <div className="incorrect-guesses-row">{letter !== null ? letter : '?'}</div>;
};

export default IncorrectGuess;
