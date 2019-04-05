import React from 'react';
import './index.css';

class Timer extends React.Component {
  state = {
    time: 90,
    timerHasStarted: false
  }

  componentDidMount = () => {
    this.startTimer();
  }

  componentWillUpdate = () => {
    const { time } = this.state;
    if (time < 1) {
      this.stopTimer()
    }
  }

  startTimer = () => {
    this.timer = setInterval(this.countDown, 1000);
    this.setState({ timerHasStarted: true });
  };

  stopTimer = () => {
    const { endGame } = this.props;
    clearInterval(this.timer);
    endGame('finished');
  };

  countDown = () => {
    const { time } = this.state;
    const currentTime = time - 1;
    this.setState({ time: currentTime });
  }

  render = () => {
    const { time } = this.state;
    return <div className="timer">{time}</div>;
  }

};

export default Timer;
