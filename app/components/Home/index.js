import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style.css'

import FormSignup from '../FormSignup'
import FormLogin from '../FormLogin'

export class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formState: "signup"
    }
  }

  render() {
    return (
      <div styleName="leader">
        <h1>Phoenix Chat</h1>
        { this.state.formState === "signup" ? <FormSignup /> : null }
        { this.state.formState === "login" ? <FormLogin /> : null }
      </div>
    )
  }
}

export default CSSModules(Home, style)
