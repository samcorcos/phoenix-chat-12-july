import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style.css'

import FormSignup from '../FormSignup'

export class Home extends React.Component {
  render() {
    return (
      <div>
        <FormSignup />
      </div>
    )
  }
}

export default CSSModules(Home, style)
