import React from 'react';

const PasswordInput = props => {
  return(
    <form>
      <h3>Password:</h3>
      <input name="password" type="text" value={props.currentPassword} onChange={props.onPasswordInputChange} />
      <p>{props.errorMessage}</p>
      <button>Submit</button>
    </form>
  )
}

export default PasswordInput;