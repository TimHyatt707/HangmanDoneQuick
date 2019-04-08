import React from 'react';
import Input from '@material-ui/core/Input';
import PrimaryButton from '../PrimaryButton';
import './index.css';

class GuessTextInput extends React.Component {
  state = {
    text: '',
  }  

  onChangeText = event => {
    const { target: { value }} = event;
    const { text } = this.state;

    if (text.length < 1 || value === '') {
      this.setState({ text: value.toLowerCase() })
    }
  }

  sendGuess = () => {
    const { sendGuess } = this.props;
    const { text } = this.state;


    this.setState({ text: '' });
    if (text.match(/[a-zA-z]/g)) {
      sendGuess(text)
    }
    // TODO: Add popup component if character inputed isn't in alphabet or if letter was already guessed
  }

  render() {
    const { text } = this.state;
    return (
      <div className="gameplay-text-input">
        <Input onChange={this.onChangeText} value={text}/>
        <PrimaryButton onClick={this.sendGuess} text="GUESS" />
      </div>
    );
  }
}

export default GuessTextInput;
