import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style.css'

export class FormLogin extends React.Component {
  constructor(props) {
    super(props)
  }

  submit(e) {
    console.log("Submit button clicked")
  }

  render() {
    return (
      <div styleName="wrapper">
        <div styleName="form">
          <div styleName="input-group">
            <input styleName="input" type="text" id="signup-email" />
          </div>
          <div styleName="input-group">
            <input styleName="input" type="password" id="signup-password" />
          </div>
        </div>
        <button
          onClick={this.submit.bind(this)}>
          Submit
        </button>
      </div>
    )
  }
}

export default CSSModules(FormLogin, style)
