import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style.css'
import { connect } from 'react-redux'
import Actions from 'redux/actions'

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
    this.props.dispatch(Actions.userNew(user))
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

export default connect()(CSSModules(FormSignup, style))
