const API_URL = 'http://app.linkedin-reach.io/words';
// NEED THIS TO SPOOF CORS
const CORS_BYPASS = 'https://cors-anywhere.herokuapp.com/';

const Status = {
  STARTED: 'started',
  FINISHED: 'finished'
};

const Score = {
  CORRECT_GUESS: 10
};

export { Status, Score, API_URL, CORS_BYPASS };
