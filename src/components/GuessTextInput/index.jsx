import React from 'react';
import Input from '@material-ui/core/Input';
import PrimaryButton from '../PrimaryButton';
import './index.css';

class GuessTextInput extends React.Component {
  state = {
    text: '',
  }  
  // TODO: Max length of guess should be one char and it should clear when the button is pressed
  onChangeText = event => {
    const { target: { value }} = event;

    this.setState({ text: value })
  }

  sendGuess = () => {
    const { sendGuess } = this.props;
    const { text } = this.state;

    sendGuess(text)
  }

  render() {
    return (
      <div className="gameplay-text-input">
        <Input onChange={this.onChangeText}/>
        <PrimaryButton onClick={this.sendGuess} text="GUESS" />
      </div>
    );
  }
}

export default GuessTextInput;
