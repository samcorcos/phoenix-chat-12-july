import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style.css'

import Sidebar from '../Sidebar'

export class Home extends React.Component {
  render() {
    return (
      <div>
        <Sidebar />
        <div styleName="chat-wrapper">
          Home component
        </div>
      </div>
    )
  }
}

export default CSSModules(Home, style)
