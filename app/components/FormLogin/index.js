import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style.css'
import { connect } from 'react-redux'
import Actions from 'redux/actions'

export class FormLogin extends React.Component {
  constructor(props) {
    super(props)
  }

  submit() {
    const user = {
      email: document.getElementById('signup-email').value,
      password: document.getElementById('signup-password').value
    }
    this.props.dispatch(Actions.userLogin(user))
  }

  render() {
    console.log(this.props.user)
    return (
      <div styleName="wrapper">
        <div styleName="form">
          <div styleName="input-group">
            <input placeholder="Email" styleName="input" type="text" id="signup-email" />
          </div>
          <div styleName="input-group">
            <input placeholder="Password" styleName="input" type="password" id="signup-password" />
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

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(CSSModules(FormLogin, style))
