import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style.css'
import 'whatwg-fetch'

export class FormSignup extends React.Component {
  constructor(props) {
    super(props)
  }

  submit() {
    const user = {
      username: document.getElementById('signup-username').value,
      email: document.getElementById('signup-email').value,
      password: document.getElementById('signup-password').value
    }
    fetch('http://localhost:4000/api/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user })
    }).then(function(res) {
      console.log(res);
    }).catch(function(res) {
      console.log(res);
    })
  }

  render() {
    return (
      <div styleName="wrapper">
        <div styleName="form">
          <div styleName="input-group">
            <input placeholder="Username" styleName="input" type="text" id="signup-username" />
          </div>
          <div styleName="input-group">
            <input placeholder="Email" styleName="input" type="text" id="signup-email" />
          </div>
          <div styleName="input-group">
            <input placeholder="Password" styleName="input" type="password" id="signup-password" />
          </div>
          <div styleName="input-group">
            <input placeholder="Verify Password" styleName="input" type="password" id="signup-verify-password" />
          </div>
          <button
            onClick={this.submit.bind(this)}>
            Submit
          </button>
        </div>
      </div>
    )
  }
}

export default CSSModules(FormSignup, style)
