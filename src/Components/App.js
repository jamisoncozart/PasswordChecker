import React from 'react';
import PasswordInput from './PasswordInput';
import '../App.css';

class App extends React.Component {

  state = {
    currentPassword: "",
    passwordLengthCheck: false,
    passwordSpecialCharCheck: false,
    passwordUppercaseCheck: false,
    passwordLetterAndNumberCheck: false,
    errorMessage: ""
  }

  handlePasswordChange = event => {

    let errorMessage = "";
    errorMessage += this.checkPasswordLength();
    errorMessage += this.checkPasswordSpecialChar();

    this.setState({
      currentPassword: event.target.value,
      errorMessage: errorMessage
    })
  }

  checkPasswordLength = () => {
    if(this.state.currentPassword.length < 8) {
      return "Password must be at least 8 characters long!\n\n"
    } else {
      return "";
    }
  }

  checkPasswordSpecialChar = () => {
    if(this.state.currentPassword.includes(['!', '@', '#', '$', '%', '^', '&', '*', '?'])) {
      return ""
    } else {
      return "You need at least 1 special character in your password (!, @, #, $, %, ^, &, *, ?)\n\n";
    }
  }

  render() {
    return (
      <React.Fragment>
        <PasswordInput currentPassword={this.state.currentPassword} onPasswordInputChange={this.handlePasswordChange} errorMessage={this.state.errorMessage}/>
      </React.Fragment>
    )
  }
}

export default App;